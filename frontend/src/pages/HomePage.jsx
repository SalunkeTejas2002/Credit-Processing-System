import { Container, Typography, Box, Card, CardContent, CircularProgress, Alert, Grid } from '@mui/material';
import useHealthStatus from '../hooks/useHealthStatus';

function HomePage() {
  const { health, loading, error } = useHealthStatus();

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Credit Processing System
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Frontend foundation powered by React, Vite, Material UI, and React Router.
        </Typography>

        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Alert severity="error">Unable to load health status.</Alert>
        ) : (
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Application Name
                  </Typography>
                  <Typography variant="body1">{health.application}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Status
                  </Typography>
                  <Typography variant="body1">{health.status}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Version
                  </Typography>
                  <Typography variant="body1">{health.version}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Box>
    </Container>
  );
}

export default HomePage;
