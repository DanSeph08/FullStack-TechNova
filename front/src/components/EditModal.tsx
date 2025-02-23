import { Modal, Box, Grid2, Button } from "@mui/material";
import { prefersDarkMode } from "../styles/theme";

interface EditModalProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const EditModal: React.FC<EditModalProps> = ({ open, onClose, onDelete }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ width: 400, bgcolor: prefersDarkMode ? "background.paper" : "background.paper" , p: 4, m: "auto", mt: "22%", borderRadius: 2 }}>
        <h1 className="text-2xl font-bold text-center text-primary.main m-5">Eliminar Actividad</h1>
          <Grid2 container direction="row" justifyContent="center" sx={{ m: 2 }}>
          <Button
            sx={{
              ml: 2,
              mt: 2,
              color: prefersDarkMode ? "primary.main" :"secondary.main",
              borderColor: prefersDarkMode ? "primary.main" : "secondary.main",
            }}
            variant="outlined"
            onClick={onClose}
          >
            {"Cancelar"}
          </Button>
          <Button
            sx={{
              ml: 2,
              mt: 2,
              color: prefersDarkMode ? "" :"",
              borderColor: prefersDarkMode ? "primary.main" : "secondary.main",
              bgcolor: prefersDarkMode ? "" : "secondary.main",
            }}
            onClick={onDelete}
            variant="contained"
          >
            {"Eliminar"}
          </Button>
        </Grid2>
      </Box>
    </Modal>
  );
};

export default EditModal;