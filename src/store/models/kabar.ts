import axios from 'axios';
import {Action, Thunk, action, thunk} from 'easy-peasy';
import {API_TOKEN, BASE_URL} from 'react-native-dotenv';

interface IKabar {
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

export interface IKabarModel {
  data: IKabar[];
  status: IStatus;
  page: number;
  setError: Action<IStatus, any>;
  setFetching: Action<IStatus, any>;
  setSuccess: Action<IStatus, any>;
  addKabar: Action<IKabarModel, any>;
  addMoreKabar: Action<IKabarModel, any>;
  getKabar: Thunk<IKabarModel>;
  getMoreKabar: Thunk<IKabarModel, any>;
}

export const kabar: IKabarModel = {
  data: [],
  status: {
    fetching: false,
    error: null,
    success: false,
  },
  page: 1,
  setError: action((state, payload) => {
    state.error = payload;
  }),
  setFetching: action((state, payload) => {
    state.fetching = payload;
  }),
  setSuccess: action((state, payload) => {
    state.success = payload;
  }),
  addKabar: action((state, payload) => {
    state.data = payload;
  }),
  addMoreKabar: action((state, payload) => {
    state.data.push(...payload);
  }),
  getKabar: thunk(async actions => {
    try {
      actions.setFetching(true);
      const response = await axios.get(
        `${BASE_URL}/api/posts?per_page=15&page=1`,
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        },
      );
      actions.addKabar(response.data.data);
    } catch (error) {
      actions.setError(error);
    } finally {
      actions.setFetching(false);
      actions.setSuccess(true);
    }
  }),
  getMoreKabar: thunk(async (actions, payload) => {
    try {
      actions.setFetching(true);
      const response = await axios.get(
        `${BASE_URL}/api/posts?per_page=15&page=${payload.page}`,
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        },
      );
      actions.addMoreKabar(response.data.data);
    } catch (error) {
      actions.setError(error);
    } finally {
      actions.setFetching(false);
      actions.setSuccess(true);
    }
  }),
};
