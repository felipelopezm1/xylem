import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SocietyPage from './pages/SocietyPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/xylem-of-society" element={<SocietyPage />} />
    </Routes>
  )
}
