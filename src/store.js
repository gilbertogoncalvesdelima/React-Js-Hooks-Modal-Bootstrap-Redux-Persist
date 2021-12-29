import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const persistConfig = {
    key: 'root',
    storage
};
/*
Se quiser armazenar somente um dado, fazer teste jeito, agora se quiser salvar tudo no persist, é igual o exemplo acima
const persistConfig = {
key: 'root',
storage: storage,
whitelist: ['usuario']
} 
*/

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };



    