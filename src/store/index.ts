import {IPenyakitModel, penyakit} from './models/penyakit';
import {createStore, createTypedHooks} from 'easy-peasy';

export interface IStore {
  penyakit: IPenyakitModel;
}

const model = {
  penyakit,
};

export const store = createStore<IStore>(model);

const typedHooks = createTypedHooks<IStore>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
