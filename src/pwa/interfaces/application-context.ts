// import { FnRegisterReducers } from '../types/fn-register-reducers';
import { History } from 'history';
// import Storage from './storage.interface';
// import { PWAModule } from '..';
import { HistoryContext } from '../react-history-context';

export default interface ApplicationContext {
  // registerReducers: FnRegisterReducers;
  history: History;
  // dispatch: Function;
  // getStorage(name: string): Storage;
  // getExternal(module: string, name: string): Promise<PWAModule<any>>;
  historyContext: HistoryContext;
}
