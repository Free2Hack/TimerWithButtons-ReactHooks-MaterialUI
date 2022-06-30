import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FaceIcon from "@mui/icons-material/Face";
import { Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};
export default function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h6" component="div">
            Timer
          </Typography>
          <FaceIcon
            sx={{ fontSize: 30, cursor: "pointer" }}
            onClick={handleOpen}
          />
        </Toolbar>
      </AppBar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Timer application with React hooks - Styles Material UI
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Free2Hack
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
