import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8b5cf6", // purple highlight color
    },
    background: {
      default: "#0c0f2e",
      paper: "#14163a",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255,255,255,0.7)",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "#ffffff",
            "&::placeholder": {
              color: "rgba(255,255,255,0.7)",
              opacity: 1,
            },
          },
          "& .MuiInputLabel-root": {
            color: "rgba(255,255,255,0.7)",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#8b5cf6",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.3)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#8b5cf6",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#8b5cf6",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
        icon: {
          color: "#8b5cf6",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1e1e2f",
          color: "#ffffff",
        },
      },
    },
  },
});

export default theme;
