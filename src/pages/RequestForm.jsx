import { Container, Paper, TextField, Typography, Button, MenuItem, Stack } from '@mui/material'

const RequestForm = () => {
  return (
    <Container maxWidth="sm" className="py-10">
      <Paper className="p-8 shadow-md">
        <Typography variant="h5" className="font-bold mb-6 text-center" sx={{ mb: 3 }}>
          Gửi Yêu Cầu Hỗ Trợ
        </Typography>
        <div className="space-y-4">
          <Stack spacing = {2}>
            <TextField fullWidth label="Họ và tên" variant="outlined" />
            <TextField fullWidth label="Số điện thoại/Zalo" variant="outlined" />
            <TextField fullWidth select label="Loại sự cố">
              <MenuItem value="phishing">Bị lừa đảo qua link</MenuItem>
              <MenuItem value="hacked">Bị chiếm quyền tài khoản</MenuItem>
              <MenuItem value="ransomware">Mã độc tống tiền</MenuItem>
              <MenuItem value="other">Vấn đề khác</MenuItem>
            </TextField>
            <TextField fullWidth multiline rows={4} label="Mô tả chi tiết sự cố" />
            <Button variant="contained" fullWidth size="large" className="bg-blue-600 py-3">GỬI YÊU CẦU</Button>
          </Stack>
          <Typography variant="caption" className="block text-center text-slate-500">
            Thông tin của bạn sẽ được bảo mật và phản hồi trong vòng 24h.
          </Typography>
        </div>
      </Paper>
    </Container>
  )
}

export default RequestForm
