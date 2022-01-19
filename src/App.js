import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(true);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
       <Modal isOpen={isOpenModal} isClose={closeModal}></Modal>
    </div>
  );
}

export default App;
