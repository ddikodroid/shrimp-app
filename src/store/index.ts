import {IKabarModel, kabar} from './models/kabar';
import {IPenyakitModel, penyakit} from './models/penyakit';
import {createStore, createTypedHooks} from 'easy-peasy';

export interface IStore {
  penyakit: IPenyakitModel;
  kabar: IKabarModel;
}

const model = {
  penyakit,
  kabar,
};

export const store = createStore<IStore>(model);

const typedHooks = createTypedHooks<IStore>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
