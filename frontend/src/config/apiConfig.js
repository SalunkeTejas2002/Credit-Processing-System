// Central API configuration values for the frontend.
// Reads the backend URL from the Vite environment variables.
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080/api/v1';
