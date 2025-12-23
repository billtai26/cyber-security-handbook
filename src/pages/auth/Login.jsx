import { Container, Paper, TextField, Button, Typography, Box, Link, Stack } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

const Login = () => {
  return (
    <Container maxWidth="xs" className="py-20">
      <Paper className="p-8 shadow-xl flex flex-col items-center border-t-4 border-blue-600">
        <Box className="bg-blue-100 p-3 rounded-full mb-4">
          <LockOutlinedIcon className="text-blue-600" />
        </Box>

        {/* Dùng sx để ép margin-bottom. 1 đơn vị = 8px. mb: 10 nghĩa là 80px */}
        <Typography
          variant="h5"
          className="font-bold text-center"
          sx={{ mb: 3 }}
        >
          Đăng Nhập Hệ Thống
        </Typography>

        <form className="w-full">
          <Stack spacing={2}>
            <TextField
              fullWidth
              label="Email/Tên đăng nhập"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label="Mật khẩu"
              type="password"
              variant="outlined"
              required
            />
            <Button
              fullWidth
              variant="contained"
              size="large"
              className="bg-blue-600 hover:bg-blue-700 py-3"
            >
              ĐĂNG NHẬP
            </Button>
          </Stack>
        </form>

        <Box className="mt-8 flex justify-between w-full text-sm">
          <Link href="#" className="text-blue-600 no-underline hover:underline">
            Quên mật khẩu?
          </Link>

          {/* Dùng Box với thuộc tính gap để giãn cách văn bản và link đăng ký */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Typography variant="body2" color="text.secondary">
              Chưa có tài khoản?
            </Typography>
            <Link
              href="/register"
              className="font-bold no-underline text-blue-600"
            >
              Đăng ký
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}

export default Login