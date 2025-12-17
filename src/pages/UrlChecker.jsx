import { useState } from 'react'
import { Container, Typography, TextField, Button, Paper, Alert } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const UrlChecker = () => {
  const [url, setUrl] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleCheck = () => {
    if (!url) return
    setLoading(true)
    setResult(null)

    // --- KHU VỰC GỌI API (Sẽ thay thế bằng VirusTotal API thật sau này) ---
    setTimeout(() => {
      // Giả lập kết quả trả về
      const isMalicious = Math.random() < 0.5 // Random hên xui để demo
      setResult({
        safe: !isMalicious,
        message: isMalicious
          ? 'CẢNH BÁO: Trang web này có dấu hiệu lừa đảo/độc hại!'
          : 'AN TOÀN: Không phát hiện mối đe dọa nào.',
        details: 'Quét bởi 65/90 công cụ bảo mật.'
      })
      setLoading(false)
    }, 1500)
    // -------------------------------------------------------------------
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-slate-100">
      <Container maxWidth="md" className="text-center">
        <Typography variant="h3" className="font-bold text-slate-800 mb-2">
          Check An Toàn URL
        </Typography>
        <Typography variant="subtitle1" className="text-slate-500 mb-8">
          Phân tích các đường dẫn, tên miền đáng ngờ để phát hiện mã độc và lừa đảo.
        </Typography>

        <Paper elevation={3} className="p-4 flex items-center rounded-full">
          <SearchIcon className="text-slate-400 ml-2 mr-2" fontSize="large"/>
          <TextField
            fullWidth
            variant="standard"
            placeholder="Nhập đường dẫn URL, IP hoặc tên miền..."
            InputProps={{ disableUnderline: true, className: 'text-lg' }}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button
            variant="contained"
            size="large"
            // Thêm 'whitespace-nowrap' và 'shrink-0' vào className dưới đây
            className="rounded-full px-8 py-3 bg-blue-600 hover:bg-blue-700 normal-case text-lg font-bold whitespace-nowrap shrink-0"
            onClick={handleCheck}
            disabled={loading}
          >
            {loading ? 'Đang quét...' : 'KIỂM TRA'}
          </Button>
        </Paper>

        {/* Kết quả trả về */}
        {result && (
          <div className="mt-8 animate-bounce-in">
            <Alert
              severity={result.safe ? 'success' : 'error'}
              variant="filled"
              className="text-left text-lg shadow-lg"
            >
              <Typography variant="h6" className="font-bold">{result.message}</Typography>
              <Typography variant="body2">{result.details}</Typography>
            </Alert>
          </div>
        )}
      </Container>
    </div>
  )
}

export default UrlChecker
