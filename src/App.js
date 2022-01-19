import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
       <Modal isOpen={isOpenModal}></Modal>
    </div>
  );
}

export default App;
