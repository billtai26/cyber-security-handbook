import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import UrlChecker from './pages/UrlChecker'
import CyberQuiz from './pages/CyberQuiz'
import Community from './pages/Community'
import { StyledEngineProvider } from '@mui/material/styles'

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
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </StyledEngineProvider>
  )
}

export default App
