import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Credit Processing System
        </Typography>
        <Button color="inherit" href="/">
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
