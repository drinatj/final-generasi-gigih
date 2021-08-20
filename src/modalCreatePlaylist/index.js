import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  buttonCreatePlaylist: {
    borderRadius: 15,
    backgroundColor: "#dabdbe",
    padding: "10px 25px",
    fontSize: "12px",
    color: "#1B2021",
    outline: "none",
    '&:hover' : {
      backgroundColor: "#dfa7a9"
    },
    '&:active' : {
      backgroundColor: "#dfa7a9",
    }
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
'& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
'& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="" className={classes.buttonCreatePlaylist} onClick={handleOpen}>
        Create Playlist
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <form className={classes.root}>
            <TextField
              id="standard-textarea"
              label="Title"
              multiline
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              variant="outlined"
            />
            <div>
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
            </div>
          </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
