import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Chip } from '@mui/material'

const Projects = () => {
  const events = [
    { id: 1, title: 'Chiến dịch tháng 10: Sạch mạng', status: 'Đang diễn ra', desc: 'Tập huấn kỹ năng chống lừa đảo cho người cao tuổi.' },
    { id: 2, title: 'Workshop: Bảo mật doanh nghiệp nhỏ', status: 'Sắp tới', desc: 'Hướng dẫn thiết lập hệ thống an toàn thông tin cơ bản.' }
  ]

  return (
    <Container className="py-10">
      <Typography variant="h4" className="font-bold mb-8">Dự án & Sự kiện cộng đồng</Typography>
      <Grid container spacing={4}>
        {events.map(ev => (
          <Grid item xs={12} md={6} key={ev.id}>
            <Card className="h-full flex flex-col">
              <CardContent className="grow">
                <Chip label={ev.status} color={ev.status === 'Đang diễn ra' ? 'success' : 'primary'} size="small" className="mb-2" />
                <Typography variant="h5" className="font-bold mb-2">{ev.title}</Typography>
                <Typography variant="body2" color="text.secondary">{ev.desc}</Typography>
              </CardContent>
              <div className="p-4 border-t">
                <Button variant="contained" fullWidth>Xem chi tiết</Button>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Projects
