import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import UrlChecker from './pages/UrlChecker'
import CyberQuiz from './pages/CyberQuiz'
import Community from './pages/Community'
import { StyledEngineProvider } from '@mui/material/styles'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Projects from './pages/Projects'
import Volunteer from './pages/Volunteer'
import RequestForm from './pages/RequestForm'
import Tracking from './pages/Tracking'
import Donation from './pages/Donation'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Router>
        <div className="min-h-screen flex flex-col bg-slate-50">
          <Navbar />

          {/* Nội dung thay đổi theo đường dẫn URL */}
          <main className="grow">
            <Routes>
              <Route path="/" element={<UrlChecker />} />
              <Route path="/quiz" element={<CyberQuiz />} />
              <Route path="/community" element={<Community />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/request" element={<RequestForm />} />
              <Route path="/tracking" element={<Tracking />} />
              <Route path="/donation" element={<Donation />} />
              <Route path="/admin/reports" element={<Dashboard />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </StyledEngineProvider>
  )
}

export default App
