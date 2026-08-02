import { Box, Typography, Alert } from '@mui/material';

function ErrorMessage({ message }) {
  return (
    <Box sx={{ py: 8 }}>
      <Alert severity="error">
        <Typography variant="body1">{message}</Typography>
      </Alert>
    </Box>
  );
}

export default ErrorMessage;
