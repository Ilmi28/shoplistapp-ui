import { Provider } from "@/components/ui/provider"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {AppWrapper} from "@/components/appWrapper.tsx";
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "@/context/auth/authProvider.tsx";
import "./index.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider>
          <AppWrapper>
              <BrowserRouter>
                  <AuthProvider>
                    <App/>
                  </AuthProvider>
              </BrowserRouter>
          </AppWrapper>
      </Provider>
  </StrictMode>,
)
