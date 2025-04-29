// src/App.jsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Overview from "./components/Overview";
import Insights from "./components/Insights";
import Demographics from "./components/Demographics";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 p-4 md:ml-64">
        {/* Hamburger button for mobile */}
        <button
          className="md:hidden mb-4"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <span className="text-white text-3xl">&#9776;</span>
        </button>

        {/* Dashboard sections */}
        <div className="space-y-8">
          <Overview />
          <div className="flex flex-col md:flex-row gap-4">
            <Insights />
            <Demographics />
          </div>
        </div>
      </div>
    </div>
  );
}




// import { useState } from 'react'
// import './App.css'
// import Header from './task1/Header'
// import Sidebar from './Dashboard/sidebar'
// import Home from './task1/Home'

// function App() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle)
//   }

//   return (
//     <div className='grid-container'>
//       <Header OpenSidebar={OpenSidebar}/>
//       <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
//       <Home />
//     </div>
//   )
// }

// export default App
