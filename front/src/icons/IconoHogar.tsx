import { SvgIconosFilledProps } from "../interfaces/icons";
import SvgIconosFilled from "./SvgIconosFilled";

const IconoHogar = (props: SvgIconosFilledProps) => {
  return (
    <SvgIconosFilled {...props}>
      <path
        d="M4.28599 12.7137V6.99944H7.71457V12.7137M0.857422 5.28516L6.00028 1.28516L11.1431 5.28516V11.5709C11.1431 11.874 11.0227 12.1647 10.8084 12.379C10.5941 12.5933 10.3034 12.7137 10.0003 12.7137H2.00028C1.69717 12.7137 1.40648 12.5933 1.19216 12.379C0.97783 12.1647 0.857422 11.874 0.857422 11.5709V5.28516Z"
        stroke="#6F797A"
        fill="transparent"
      />
    </SvgIconosFilled>
  );
};

export default IconoHogar;
