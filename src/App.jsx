import ReactDOM from "react-dom/client"
import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'

// Imported Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Work from "./pages/Work"
import Contacts from "./pages/Contacts"
import Mobileapp from "./pages/Mobileapp"
import Webapp from "./pages/Webapp"
import { AnimatePresence } from "framer-motion"

function App() {


  return (
    <BrowserRouter basename="/" >
      <AnimatePresence>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />}>

              <Route path="/work" element={<Webapp />} />
              <Route path="/work/mobile" element={<Mobileapp />} />
            </Route>

            <Route path="/contacts" element={<Contacts />} />

          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>

  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
