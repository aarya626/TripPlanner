import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Custom/Header.jsx'
import CreateTrip from './components/createtrip/CreateTrip.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/createtrip',
    element: <CreateTrip/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
      <RouterProvider router={router}/>
  </StrictMode>,
)
