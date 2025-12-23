import { Container, Paper, Typography, Grid, TextField, Button, MenuItem, Checkbox, FormControlLabel } from '@mui/material'

const Volunteer = () => {
  return (
    <Container className="py-12">
      <Paper className="p-10 shadow-lg border-l-8 border-green-500">
        <Typography variant="h4" className="font-bold mb-2 text-slate-800">Đăng Ký Tình Nguyện Viên</Typography>
        <Typography variant="body1" className="text-slate-500 mb-8 italic">
          Gia nhập đội ngũ phản ứng nhanh để hỗ trợ nạn nhân và lan tỏa tri thức an toàn mạng.
        </Typography>

        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Họ và Tên" variant="standard" required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Email" variant="standard" type="email" required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Số điện thoại" variant="standard" required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth select label="Chuyên môn chính" variant="standard" defaultValue="tu-van">
                <MenuItem value="tu-van">Tư vấn tâm lý/cộng đồng</MenuItem>
                <MenuItem value="ky-thuat">Kỹ thuật/Xử lý sự cố</MenuItem>
                <MenuItem value="content">Sáng tạo nội dung/Truyền thông</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Kinh nghiệm/Kỹ năng liên quan"
                placeholder="VD: Đã từng tham gia các dự án bảo mật, có chứng chỉ CEH,..."
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox defaultChecked color="success" />}
                label="Tôi cam kết tuân thủ quy tắc bảo mật thông tin nạn nhân."
                className="text-slate-600"
              />
            </Grid>
            <Grid item xs={12} className="flex justify-end">
              <Button variant="contained" size="large" className="bg-green-600 px-10 py-3">
                GỬI ĐƠN ĐĂNG KÝ
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Volunteer