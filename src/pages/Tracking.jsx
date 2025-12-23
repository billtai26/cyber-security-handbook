import { Container, TextField, Button, Paper, Stepper, Step, StepLabel, Typography } from '@mui/material'
import { useState } from 'react'

const Tracking = () => {
  const [code, setCode] = useState('')
  const [status, setStatus] = useState(null)

  const handleTrack = () => {
    // Giả lập tra cứu
    if (code) setStatus(1) // Bước 2: Đang xử lý
  }

  const steps = ['Đã tiếp nhận', 'Đang xác minh', 'Đang xử lý', 'Hoàn tất']

  return (
    <Container maxWidth="md" className="py-20 text-center">
      <Typography variant="h4" className="font-bold mb-4 text-slate-800">Theo dõi xử lý sự cố</Typography>
      <div className="flex gap-2 mb-10 justify-center">
        <TextField
          placeholder="Nhập mã yêu cầu (VD: CS-12345)"
          className="bg-white w-full max-w-sm"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Button variant="contained" onClick={handleTrack}>KIỂM TRA</Button>
      </div>

      {status !== null && (
        <Paper className="p-10 shadow-lg animate-fade-in">
          <Typography variant="h6" className="mb-6 font-bold">Mã yêu cầu: {code}</Typography>
          <Stepper activeStep={status} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}><StepLabel>{label}</StepLabel></Step>
            ))}
          </Stepper>
        </Paper>
      )}
    </Container>
  )
}

export default Tracking
