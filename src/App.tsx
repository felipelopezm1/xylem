import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SocietyPage from './pages/SocietyPage'
import CursorInvertEffect from './components/effects/CursorInvertEffect'

export default function App() {
  return (
    <>
      <CursorInvertEffect />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/xylem-of-society" element={<SocietyPage />} />
      </Routes>
    </>
  )
}
