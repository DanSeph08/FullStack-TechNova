import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.tsx'
import { persistor, store } from './store/store.ts'
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Se coloca el store global para que todos los componentes tenga acceso */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
