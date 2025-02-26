import { SvgIconosFilledProps } from "../interfaces/icons";
import SvgIconosFilled from "./SvgIconosFilled";

const SearchIcon = (props: SvgIconosFilledProps) => {
  return (
    <SvgIconosFilled {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M23 23L18.65 18.65M21 13C21 17.4183 17.4183 21 13 21C8.58172 21 5 17.4183 5 13C5 8.58172 8.58172 5 13 5C17.4183 5 21 8.58172 21 13Z"
          stroke={props.color || "#fff"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIconosFilled>
  );
};

export default SearchIcon;
