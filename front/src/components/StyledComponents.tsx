import { InputBase, Pagination, styled } from "@mui/material";
import { prefersDarkMode } from "../styles/theme";
import SearchIcon from "../icons/SearchIcon";

export const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    fontSize: 12,
    fontWeight: 500,
    border: "none",
    color: prefersDarkMode ? theme.palette.text.secondary : theme.palette.text.secondary,
  },
  "& .MuiPaginationItem-page:hover": {
    backgroundColor: prefersDarkMode ? theme.palette.primary : theme.palette.secondary,
    color: prefersDarkMode ? theme.palette.text.secondary : theme.palette.text.secondary,
    border: `1px solid ${theme.palette.text.secondary}`,
  },
  "& .MuiPaginationItem-page.Mui-selected": {
    borderRadius: 4,
    backgroundColor: "transparent",
    color: prefersDarkMode ? theme.palette.text.primary : theme.palette.text.primary,
    border: `1px solid ${theme.palette.text.secondary}`,
    "&:hover": {
      backgroundColor: prefersDarkMode ? theme.palette.primary : theme.palette.secondary,
    },
  },
  "& .MuiPaginationItem-previousNext": {
    margin: 10,
    borderRadius: 4,
    color: prefersDarkMode ? theme.palette.text.secondary : theme.palette.text.secondary,
    "&:hover": {
      backgroundColor: "transparent",
      border: `1px solid ${theme.palette.text.secondary}`,
    },
    "&.Mui-disabled": {
      color: prefersDarkMode ? theme.palette.text.secondary : theme.palette.text.primary,
      opacity: 1,
    },
  },
}));


export const StyledSearchInput = styled(InputBase)(({ theme }) => ({
  height: 40,
  fontSize: 12,
  maxWidth: 450,
  width: "100%",
  fontWeight: 500,
  padding: "0.5rem",
  borderRadius: "4px",
  backgroundColor: "white",
  color: theme.palette.text.primary,
  "& .MuiInputBase-input": {
    "::placeholder": {
      color: theme.palette.text.secondary,
    },
  },
}));

export const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
  fontSize: 16,
  marginLeft: "0.5rem",
  marginRight: "0.5rem",
  color: theme.palette.primary.main,
}));

export const SelectInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));
