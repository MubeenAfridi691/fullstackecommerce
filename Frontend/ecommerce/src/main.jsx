import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from '../Router/router'
import { Provider } from 'react-redux'
import store from '../store/store.js'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>

  {/* <StrictMode> */}
   <RouterProvider router={router}/>
  {/* </StrictMode> */}
  </Provider>
)
