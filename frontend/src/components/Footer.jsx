import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, mt: 'auto', backgroundColor: '#f5f5f5' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        © 2026 Credit Processing System
      </Typography>
    </Box>
  );
}

export default Footer;
