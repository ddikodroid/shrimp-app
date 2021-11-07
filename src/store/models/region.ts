import axios from 'axios';
import {action, Action, thunk, Thunk} from 'easy-peasy';
import {BASE_URL} from 'react-native-dotenv';
import {IStatus} from './penyakit';
interface IRegion {
  id: string;
  name: string;
  province_name: string;
  regency_name: string;
}

export interface IRegionModel {
  data: IRegion[];
  status: IStatus;
  setError: Action<IStatus, any>;
  setFetching: Action<IStatus, any>;
  setSuccess: Action<IStatus, any>;
  setRegion: Action<IRegionModel, any>;
  searchRegion: Thunk<IRegionModel, any>;
}

export const region: IRegionModel = {
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
  setRegion: action((state, payload) => {
    state.data = payload;
  }),
  searchRegion: thunk(async (actions, payload) => {
    try {
      actions.setFetching(true);
      const response = await axios.get(
        `${BASE_URL}/api/regions?has=shrimp_prices&search=${payload.query}`,
      );
      actions.setRegion(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      actions.setFetching(false);
    }
  }),
};
