import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3B4BA0", // Navy Blue from logo
      light: "#6B7BC0",
      dark: "#2A3670",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFD700", // Golden Yellow from logo
      light: "#FFE54D",
      dark: "#E6C200",
      contrastText: "#2A3670",
    },
    error: {
      main: "#E63946", // Red from logo
      light: "#FF5A65",
      dark: "#C41E2A",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FAFAFA",
    },
    text: {
      primary: "#2A3670", // Navy Blue
      secondary: "#5A5A5A",
    },
  },
  typography: {
    fontFamily: '"Montserrat", serif',
    h1: {
      fontFamily: '"Lora"',
      fontWeight: 700,
      fontSize: "3.5rem",
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontFamily: '"Lora"',
      fontWeight: 600,
      fontSize: "2.75rem",
      letterSpacing: "-0.01em",
      lineHeight: 1.3,
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontFamily: '"Lora"',
      fontWeight: 600,
      fontSize: "2.25rem",
      lineHeight: 1.4,
      "@media (max-width:600px)": {
        fontSize: "1.75rem",
      },
    },
    h4: {
      fontFamily: '"Lora"',
      fontWeight: 500,
      fontSize: "1.75rem",
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body1: {
      fontSize: "1.125rem",
      lineHeight: 1.7,
      letterSpacing: "0.01em",
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      fontSize: "0.875rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          padding: "12px 32px",
          transition: "all 0.3s ease",
          fontWeight: 600,
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 24px rgba(59, 75, 160, 0.3)",
          },
        },
        contained: {
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 32px rgba(59, 75, 160, 0.15)",
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
});

export default theme;
