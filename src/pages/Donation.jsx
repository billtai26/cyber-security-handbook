import { Container, Grid, Paper, Typography, Button, Box, Divider } from '@mui/material'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'

const Donation = () => {
  return (
    <Container className="py-12">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" className="font-extrabold mb-4 text-slate-800">
            Đồng hành cùng <span className="text-green-600">Sotayantoan</span>
          </Typography>
          <Typography variant="body1" className="text-slate-600 mb-6 leading-relaxed">
            Sứ mệnh của chúng tôi là tạo ra một cộng đồng mạng an toàn cho mọi người.
            Mọi sự đóng góp của bạn đều giúp chúng tôi nâng cấp hệ thống quét AI
            và tổ chức thêm các buổi workshop miễn phí cho người yếu thế.
          </Typography>
          <Divider className="mb-6" />
          <Box className="space-y-4">
            <Typography variant="h6" className="font-bold">Tại sao nên ủng hộ?</Typography>
            <Typography variant="body2">• Duy trì hệ thống quét URL thời gian thực.</Typography>
            <Typography variant="body2">• Phát triển trợ lý ảo AI giải đáp sự cố 24/7.</Typography>
            <Typography variant="body2">• Tài trợ các chiến dịch tuyên truyền tại địa phương.</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className="p-8 shadow-2xl text-center bg-slate-50 border-2 border-dashed border-slate-300">
            <VolunteerActivismIcon className="text-red-500 text-6xl mb-4" />
            <Typography variant="h5" className="font-bold mb-4 text-slate-800">Ủng hộ qua QR Code</Typography>

            {/* Placeholder cho QR Code */}
            <Box className="bg-white w-48 h-48 mx-auto mb-6 flex items-center justify-center border rounded-lg shadow-inner">
              <Typography variant="caption" className="text-slate-400">QR Ngân hàng / Momo</Typography>
            </Box>

            <Typography variant="subtitle1" className="font-bold text-slate-700">STK: 1234 5678 9999</Typography>
            <Typography variant="body2" className="text-slate-500 mb-4">Ngân hàng MB Bank - Chủ TK: SỔ TAY AN TOÀN</Typography>

            <Button variant="contained" color="success" fullWidth size="large" className="rounded-full">
              XÁC NHẬN ĐÃ QUYÊN GÓP
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Donation
