import axios from 'axios';
import {action, Action, thunk, Thunk} from 'easy-peasy';
import {API_TOKEN, BASE_URL} from 'react-native-dotenv';

interface IUdang {
  id: number;
  date: string;
  size_20: null | number;
  size_30: null | number;
  size_40: null | number;
  size_50: null | number;
  size_60: null | number;
  size_70: null | number;
  size_80: null | number;
  size_90: null | number;
  size_100: null | number;
  size_110: null | number;
  size_120: null | number;
  size_130: null | number;
  size_140: null | number;
  size_150: null | number;
  size_160: null | number;
  size_170: null | number;
  size_180: null | number;
  size_190: null | number;
  size_200: null | number;
  remark: string | null;
  created_at: string;
  currency_id: string;
  region: {
    name: string;
    province_name: string;
  };
  creator: {
    id: number;
    name: string;
    phone: string;
    email_verified: boolean;
  };
}

export interface IUdangModel {
  data: IUdang[];
  status: IStatus;
  setError: Action<IStatus, any>;
  setFetching: Action<IStatus, any>;
  setSuccess: Action<IStatus, any>;
  addUdang: Action<IUdangModel, any>;
  addMoreUdang: Action<IUdangModel, any>;
  clearUdang: Action<IUdangModel>;
  getUdang: Thunk<IUdangModel, any>;
  getMoreUdang: Thunk<IUdangModel, any>;
}

export const udang: IUdangModel = {
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
  clearUdang: action(state => {
    state.data = [];
  }),
  addUdang: action((state, payload) => {
    state.data = payload;
  }),
  addMoreUdang: action((state, payload) => {
    state.data.push(...payload);
  }),
  getUdang: thunk(async (actions, payload) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/shrimp_prices?per_page=15&page=1&with=region,creator&region_id=${payload.region_id}`,
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        },
      );
      actions.addUdang(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }),
  getMoreUdang: thunk(async (actions, payload) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/shrimp_prices?per_page=15&page=${payload.page}&with=region,creator&region_id=${payload.region_id}`,
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        },
      );

      actions.addMoreUdang(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }),
};
