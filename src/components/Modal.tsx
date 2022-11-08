import { Fragment, useState } from 'react';
import { Button } from '../stories/Button';
import ModalStories from '../stories/Modal.stories';
import './Modal.css';

interface ModalProps {
    /**
     * Encabezado del Modal
     */
    title?: string;
    /**
     * Label que Muestra el texto
     */
    mensaje?: string;

    /**
     * tamaño del modal
     */
    size?: 'Pequeño' | 'Mediano' | 'Largo';
    /**
     * tipo Modal
     */
    tipo?: number;
}

export const Modal = ({
    title = 'Titulo del Modal',
    mensaje = 'Mensaje',
    size = 'Mediano',
    tipo = 0

}: ModalProps) => {
    const [isOpen, setIsOpen] = useState(true);
    const open = () => {
        setIsOpen(true);
    }
    const close = () => {
        setIsOpen(false);
    }

    let mode: string;
    switch (tipo) {
        case 1:
            mode = 'storybook-modal--alert'
            break;
        case 2:
            mode = 'storybook-modal--warning'
            break;
        case 3:
            mode = 'storybook-modal--success'
            break;
        default:
            mode = 'storybook-modal--modal'
            break;
    }
    return (
        <Fragment>
            <Button onClick={open}>Abrir Modal</Button>
            <Modal
                open={isOpen}
                onClose={close}
            >
                <h3> {title} </h3>
                <div>
                    <p> {mensaje} </p>
                    <img className={[`modal-${size}`, mode].join(' ')} />
                </div>
            </Modal>
        </Fragment>
    )
};