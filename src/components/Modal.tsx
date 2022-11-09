import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import './Modal.css'
// import imageAlert from './img/icon-alert.png'
// import imageWarning from './img/icon-warning.png'
interface ModalProps {
  title?: string;
  mensaje?: string;
  tipo?: number;
}

export const WindowModal = ({
  title = "Titulo Ventana Modal",
  mensaje = "Mensaje Ventana Modal",
  tipo = 1

}: ModalProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const imageAlert = '../src/components/img/icon-alert.png'
  const imageWarning = './img/icon-warning.png'
  const alert ={
    src:imageAlert,
    alt: 'alto'
  }
  const warning ={
    src:imageWarning,
    alt: 'precaución'
  }
  const mode = tipo== 1? true:false 
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
          <span id="modal-title">{title}</span>
        </div>
        <p id="modal-description">
          {mensaje}
        </p>
        
        <img src={mode?alert.src:warning.src} alt={mode?alert.alt:warning.alt} className={['iconos'].join(' ')}/>
      </div>
    </Modal>
  </div>
);
}