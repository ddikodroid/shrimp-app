import {IRegionModel, region} from './models/region';
import {IKabarModel, kabar} from './models/kabar';
import {IPenyakitModel, penyakit} from './models/penyakit';
import {createStore, createTypedHooks} from 'easy-peasy';
import {IUdangModel, udang} from './models/udang';

export interface IStore {
  penyakit: IPenyakitModel;
  kabar: IKabarModel;
  region: IRegionModel;
  udang: IUdangModel;
}

const model = {
  penyakit,
  kabar,
  region,
  udang,
};

export const store = createStore<IStore>(model);

const typedHooks = createTypedHooks<IStore>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
