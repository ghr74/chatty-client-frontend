export const getTestUser = () => import.meta.env.VITE_TEST_USER;
export const getTestPasswort = () => import.meta.env.VITE_TEST_PASSWORD;
export const getEnvironment = () => process.env.ENVIRONMENT || "DEV";
