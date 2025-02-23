import { styled, TextField, TextFieldProps } from "@mui/material";

const StyledTextField = styled(TextField)(({ theme }) => {
  const focusColor = theme.palette.mode === "dark" ? theme.palette.primary.main : theme.palette.secondary.main;

  return {
    "& .MuiInputBase-input": {
      "&::-webkit-calendar-picker-indicator": {
        filter: "invert(100%) sepia(100%) saturate(0%) hue-rotate(106deg) brightness(103%) contrast(102%)",
      },
    },

    "& .MuiOutlinedInput-input": {
      fontWeight: 500,
    },

    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "8px",
    },

    "& .MuiOutlinedInput-root": {
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: focusColor,
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: focusColor,
      },
    },

    "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.action.disabled,
    },

    "& .MuiInputLabel-root": {
      fontWeight: 600,
      color: "#6f797a",
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: focusColor,
    },

    "& .MuiSvgIcon-root": {
      color: focusColor,
    },

    "& .MuiOutlinedInput-input:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.paper} inset`,
    },
  };
});

const AppTextField = (props: TextFieldProps) => {
  return <StyledTextField {...props} />;
};

export default AppTextField;
