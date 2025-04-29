import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SideBar from './Dashboard/sidebar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <SideBar/> */}
  </StrictMode>,
)
