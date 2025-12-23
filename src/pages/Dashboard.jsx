import { Container, Grid, Paper, Typography, Box } from '@mui/material'
import AssessmentIcon from '@mui/icons-material/Assessment'
import PeopleIcon from '@mui/icons-material/People'
import BugReportIcon from '@mui/icons-material/BugReport'

const StatCard = ({ title, value, icon, color }) => (
  <Paper className="p-6 border-l-4" style={{ borderColor: color }}>
    <Box className="flex items-center gap-4">
      <div style={{ color }}>{icon}</div>
      <div>
        <Typography variant="subtitle2" color="text.secondary">{title}</Typography>
        <Typography variant="h4" className="font-bold">{value}</Typography>
      </div>
    </Box>
  </Paper>
)

const Dashboard = () => {
  return (
    <Container className="py-10">
      <Typography variant="h4" className="font-bold mb-8">Báo cáo hoạt động</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <StatCard title="Yêu cầu đã xử lý" value="1,245" icon={<BugReportIcon fontSize="large"/>} color="#2563eb" />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard title="Tình nguyện viên" value="86" icon={<PeopleIcon fontSize="large"/>} color="#16a34a" />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard title="Cảnh báo mới/tháng" value="12" icon={<AssessmentIcon fontSize="large"/>} color="#dc2626" />
        </Grid>
      </Grid>

      {/* Thêm biểu đồ hoặc bảng danh sách sự cố mới nhất ở đây */}
      <Paper className="mt-8 p-6 h-64 flex items-center justify-center text-slate-400 border-dashed border-2">
        Khu vực hiển thị biểu đồ xu hướng lừa đảo (Sử dụng Recharts)
      </Paper>
    </Container>
  )
}

export default Dashboard
