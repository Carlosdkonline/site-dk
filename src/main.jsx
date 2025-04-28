import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DKStudioPortal from './pages/DKStudioPortal'
import NoticiaPage from './pages/NoticiaPage'
import EspetaculoPage from './pages/EspetaculoPage' // <- ADICIONAR ESTA LINHA
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DKStudioPortal />} />
        <Route path='/noticia/:id' element={<NoticiaPage />} />
        <Route path='/espetaculo/:id' element={<EspetaculoPage />} /> {/* <- ESTA LINHA NOVA */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
