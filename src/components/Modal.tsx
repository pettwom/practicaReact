import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import './Modal.css'

interface ModalProps {
  Title?: string;
  Mensaje?: string;
  Tipo?: boolean;
}

export const WindowModal = ({
  Title = "Titulo Ventana Modal",
  Mensaje = "Mensaje Ventana Modal",
  Tipo = true

}: ModalProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const imageAlert = '/img/icon-alert.png'
  const imageWarning = '/img/icon-warning.png'
  const alert ={
    src:imageAlert,
    alt: 'alto'
  }
  const warning ={
    src:imageWarning,
    alt: 'precaución'
  }
  
return (
  <div>
    <Button onClick={handleOpen} className={['btn btn-primary'].join(' ')}>Abrir Ventana Modal</Button>
    
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"

    >
      <div className={["modal_container"].join(' ')} >
        <div className={["container-title"].join(' ')}>
          <span id="modal-title">{Title}</span>
        </div>
        <p id="modal-description">
          {Mensaje}
        </p>
        
        <img src={Tipo?alert.src:warning.src} alt={Tipo?alert.alt:warning.alt} className={['iconos'].join(' ')}/>
      </div>
    </Modal>
  </div>
);
}