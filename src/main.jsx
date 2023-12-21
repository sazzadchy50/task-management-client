import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
 <QueryClientProvider client={queryClient}>

    <RouterProvider router={router}/>
 </QueryClientProvider>

  </React.StrictMode>,
)
