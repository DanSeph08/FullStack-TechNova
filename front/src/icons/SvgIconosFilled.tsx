import { SvgIcon } from "@mui/material";
import { SvgIconosFilledProps } from "../interfaces/icons";


const SvgIconosFilled = ({ children, sx }: SvgIconosFilledProps) => {
  return <SvgIcon sx={{ ...sx }}>{children}</SvgIcon>;
};

export default SvgIconosFilled;
