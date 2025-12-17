import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import SecurityIcon from '@mui/icons-material/Security'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <AppBar position="static" className="bg-slate-900 shadow-lg">
      <Toolbar>
        <SecurityIcon className="mr-2 text-green-400" />
        <Typography variant="h6" component="div" className="font-bold grow text-green-400">
          <Link to="/" className="no-underline text-inherit">Sotayantoan</Link>
        </Typography>
        <Box className="flex gap-2">
          <Button color="inherit" component={Link} to="/">Check URL</Button>
          <Button color="inherit" component={Link} to="/quiz">AI Quiz</Button>
          <Button color="inherit" component={Link} to="/community">Cộng đồng</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
