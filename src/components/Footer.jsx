import { Typography } from '@mui/material'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-6 text-center mt-auto border-t border-slate-700">
      <Typography variant="body2">
        © {new Date().getFullYear()} Sotayantoan. Dữ liệu được hỗ trợ bởi VirusTotal & Gemini AI.
      </Typography>
    </footer>
  )
}

export default Footer
