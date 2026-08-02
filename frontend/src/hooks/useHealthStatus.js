import { useEffect, useState } from 'react';
import { fetchHealthStatus } from '../services/healthService';

const initialState = {
  status: 'UNKNOWN',
  application: 'Unknown',
  version: 'Unknown',
};

function useHealthStatus() {
  const [health, setHealth] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadHealth = async () => {
      try {
        const data = await fetchHealthStatus();
        setHealth(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadHealth();
  }, []);

  return { health, loading, error };
}

export default useHealthStatus;
