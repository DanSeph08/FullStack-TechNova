import { TableCell, TextField } from "@mui/material";
import { useState } from "react";

interface EditableTableCellProps {
  value: string | number;
  onSave: (value: string | number) => void;
}

const EditableTableCell = ({ value, onSave }: EditableTableCellProps) => {
  const [tempValue, setTempValue] = useState(value);

  return (
    <TableCell>
        <TextField
        value={tempValue}
        onChange={(e) => setTempValue(e.target.value)}
        onBlur={() => onSave(tempValue)}
        multiline={true} // Permite múltiples líneas
        maxRows={4} // Máximo de líneas permitidas antes de que aparezca el scroll
        fullWidth
        variant="standard"
        sx={{
          wordBreak: "break-word",
          whiteSpace: "pre-wrap",
        }}
        />
    </TableCell>
  );
};
 
export default EditableTableCell;