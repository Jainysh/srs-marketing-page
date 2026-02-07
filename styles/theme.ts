import { createTheme } from "@mui/material/styles";

export const colorPallette = {
  primary: {
    main: "#D4AF37", // Golden
    light: "#F4E5C2",
    dark: "#B8941F",
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#8B7355", // Earthy brown for handloom feel
    light: "#C5B299",
    dark: "#5D4E3B",
    contrastText: "#FFFFFF",
  },
  background: {
    default: "#FFFFFF",
    paper: "#FAFAFA",
  },
  text: {
    primary: "#2C2C2C",
    secondary: "#5A5A5A",
  },
};
const theme = createTheme({
  palette: colorPallette,
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
          borderRadius: "2px",
          padding: "12px 32px",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 24px rgba(212, 175, 55, 0.3)",
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
          borderRadius: "0",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 0,
  },
});

export default theme;
