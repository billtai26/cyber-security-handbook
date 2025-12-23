import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from '@mui/material'
import SecurityIcon from '@mui/icons-material/Security'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  return (
    <AppBar position="static" className="bg-slate-900 shadow-lg">
      <Toolbar>
        <SecurityIcon className="mr-2 text-green-400" />
        <Typography variant="h6" component="div" className="font-bold grow text-green-400">
          <Link to="/" className="no-underline text-inherit">Sotayantoan</Link>
        </Typography>

        <Box className="hidden md:flex gap-1">
          <Button color="inherit" component={Link} to="/">Quét URL</Button>
          <Button color="inherit" component={Link} to="/quiz">AI Quiz</Button>
          <Button color="inherit" component={Link} to="/projects">Sự kiện</Button>
          <Button color="inherit" component={Link} to="/request">Hỗ trợ</Button>
          <Button color="inherit" component={Link} to="/tracking">Tra cứu</Button>
          <Button color="inherit" component={Link} to="/donation" className="text-yellow-400">Quyên góp</Button>
          <Button variant="outlined" color="inherit" component={Link} to="/login" className="ml-2">Đăng nhập</Button>
        </Box>

        {/* Mobile Menu */}
        <Box className="md:hidden">
          <IconButton color="inherit" onClick={(e) => setAnchorEl(e.currentTarget)}><MenuIcon /></IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
            <MenuItem component={Link} to="/projects" onClick={() => setAnchorEl(null)}>Dự án</MenuItem>
            <MenuItem component={Link} to="/volunteer" onClick={() => setAnchorEl(null)}>Đăng ký TNV</MenuItem>
            <MenuItem component={Link} to="/dashboard" onClick={() => setAnchorEl(null)}>Báo cáo</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
