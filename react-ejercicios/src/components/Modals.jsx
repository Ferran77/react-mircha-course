import React from 'react'
import { Modal } from "./Modal";
import { useModal } from "./hooks/useModal";
import ContactForm from "./ContactForm";
import ModalPortal from "./ModalPortal";

export const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenContact, openContact, closeContact] = useModal(false);
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);

  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1} >Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Contenido del modal 1</p>
        <img src="https://loremflickr.com/200/300/kitten" alt="Animals" />
      </Modal>
      <button onClick={openModal2} >Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>OtroModal </h3>
        <p>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Donec dictum tortor sed finibus dignissim.
          Maecenas sem enim, aliquam non urna a,
          consectetur tempor orci.
        </p>
        <img src="https://loremflickr.com/200/300/dog" alt="Kitten" />
      </Modal>
      <button onClick={openContact} >Modal contacto</button>
      <Modal isOpen={isOpenContact} closeModal={closeContact}>
        <ContactForm />
      </Modal>
      <button onClick={openModalPortal} >Modal en portal</button>
      <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
        <h3>Modal en portal </h3>
        <p>
          Contenido de un portal que se carga en nodo diferente del DOM, aquí se renderiza nuestra app de React gracias a los portales.
        </p>
        <img src="https://loremflickr.com/200/300/tech" alt="tech" />
      </ModalPortal>
    </div>
  )
};
export default Modals;