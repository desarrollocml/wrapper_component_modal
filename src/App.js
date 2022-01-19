
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

function App() {
    const [isOpenModal, openModal,closeModal]=useModal();

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
       <Modal isOpen={isOpenModal} isClose={closeModal}></Modal>
    </div>
  );
}

export default App;
