import { Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material'

const Community = () => {
  // Dữ liệu giả (Mock data)
  const posts = [
    { id: 1, user: 'Minh Anh', title: 'Cảnh báo lừa đảo việc làm trên Telegram', content: 'Mọi người cẩn thận với các group làm nhiệm vụ like Tiktok nhận tiền nhé...' },
    { id: 2, user: 'Tuan IT', title: 'Lỗ hổng mới trên Windows 11', content: 'Microsoft vừa tung bản vá bảo mật tháng 12, mọi người nhớ update ngay.' }
  ]

  return (
    <Container maxWidth="lg" className="py-10">
      <Typography variant="h4" className="font-bold text-slate-800 mb-8">
        Cộng đồng cảnh báo
      </Typography>

      <Grid container spacing={3}>
        {posts.map(post => (
          <Grid item xs={12} md={6} key={post.id}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="bg-blue-500">{post.user[0]}</Avatar>
                  <Typography variant="subtitle2" className="font-bold">{post.user}</Typography>
                </div>
                <Typography variant="h6" className="mb-2 text-blue-700">{post.title}</Typography>
                <Typography variant="body2" color="text.secondary">{post.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Community
