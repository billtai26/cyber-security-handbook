import { Container, Paper, TextField, Button, Typography, Box, Link, Stack } from '@mui/material'
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined'
import { Link as RouterLink } from 'react-router-dom' // Import RouterLink để chuyển trang mượt mà

const Register = () => {
  return (
    <Container maxWidth="xs" className="py-16">
      <Paper className="p-8 shadow-xl flex flex-col items-center border-t-4 border-blue-600">
        <Box sx={{ bgcolor: '#e8f5e9', p: 2, borderRadius: '50%', mb: 3 }}>
          <PersonAddOutlinedIcon sx={{ color: '#2e7d32' }} />
        </Box>

        <Typography
          variant="h5"
          className="font-bold text-center"
          sx={{ mb: 8 }}
        >
          Tạo Tài Khoản Mới
        </Typography>

        <form className="w-full">
          <Stack spacing={3}>
            <TextField fullWidth label="Họ và Tên" variant="outlined" required />
            <TextField fullWidth label="Địa chỉ Email" type="email" variant="outlined" required />
            <TextField fullWidth label="Mật khẩu" type="password" variant="outlined" required />
            <TextField fullWidth label="Xác nhận mật khẩu" type="password" variant="outlined" required />

            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{
                bgcolor: '#2980b9',
                '&:hover': { bgcolor: '#1b5e20' },
                py: 1.5,
                mt: 2
              }}
            >
              ĐĂNG KÝ NGAY
            </Button>
          </Stack>
        </form>

        {/* Phần điều chỉnh để hai chữ ngang hàng tuyệt đối */}
        <Box sx={{
          mt: 6,
          display: 'flex',
          alignItems: 'baseline', // Căn chỉnh theo chân chữ để thẳng hàng nhất
          justifyContent: 'center',
          gap: 1
        }}>
          <Typography variant="body2" color="text.secondary">
            Đã có tài khoản?
          </Typography>
          <Link
            component={RouterLink} // Sử dụng RouterLink để tránh reload trang
            to="/login"
            variant="body2" // Đồng nhất variant với Typography ở trên
            sx={{
              fontWeight: 'bold',
              textDecoration: 'none',
              color: '#3498db',
              '&:hover': { textDecoration: 'underline' }
            }}
          >
            Đăng nhập
          </Link>
        </Box>
      </Paper>
    </Container>
  )
}

export default Register