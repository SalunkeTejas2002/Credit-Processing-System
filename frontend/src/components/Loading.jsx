import { Box, CircularProgress, Typography } from '@mui/material';

function Loading() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 8 }}>
      <CircularProgress />
      <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary">
        Loading...
      </Typography>
    </Box>
  );
}

export default Loading;
