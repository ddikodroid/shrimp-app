import axios from 'axios';
import {Action, Thunk, action, thunk} from 'easy-peasy';
import {API_TOKEN, BASE_URL} from 'react-native-dotenv';

interface IPenyakit {
  id: number;
  full_name: string;
  short_name?: string;
  image: string;
  slug?: string;
  meta_description: string;
  meta_keywords?: string;
  status?: string;
  indication?: string;
  pathogen?: string;
  effect?: string;
  stability_viability?: string;
  handling?: string;
  regulation?: string;
  reference?: string;
  created_by?: number;
  updated_by?: number;
  created_at: string;
  updated_at?: string;
}

export interface IStatus {
  fetching: boolean;
  error: null | undefined | string;
  success: boolean;
}

export interface IPenyakitModel {
  data: IPenyakit[];
  status: IStatus;
  setError: Action<IStatus, any>;
  setFetching: Action<IStatus, any>;
  setSuccess: Action<IStatus, any>;
  addPenyakit: Action<IPenyakitModel, any>;
  getPenyakit: Thunk<IPenyakitModel>;
}

export const penyakit: IPenyakitModel = {
  data: [],
  status: {
    fetching: false,
    error: null,
    success: false,
  },
  setError: action((state, payload) => {
    state.error = payload;
  }),
  setFetching: action((state, payload) => {
    state.fetching = payload;
  }),
  setSuccess: action((state, payload) => {
    state.success = payload;
  }),
  addPenyakit: action((state, payload) => {
    state.data = payload;
  }),
  getPenyakit: thunk(async actions => {
    try {
      actions.setFetching(true);
      const response = await axios.get(`${BASE_URL}/api/diseases`, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      });
      actions.addPenyakit(response.data.data);
    } catch (error) {
      console.log(error);
      actions.setError(error);
    } finally {
      actions.setFetching(false);
      actions.setSuccess(true);
    }
  }),
};
