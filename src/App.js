
import GalleryModal from "./components/GalleryModal";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

function App() {
    const [isOpenLoginModal, openLoginModal,closeLoginModal]=useModal();
    const [isOpenChatModal, openChatModal,closeChatModal]=useModal();
    const [isOpenGalleryModal, openGalleryModal,closeGalleryModal]=useModal(false);

  return (
    <div>
      <button onClick={openLoginModal}>Open Login  Modal</button>
      <button onClick={openChatModal}>Open Chat Modal</button>
      <button onClick={openGalleryModal}>Open Gallery Modal</button>
       <Modal isOpen={isOpenLoginModal} 
       isClose={closeLoginModal}
       title="Login">
        <form>
          <input type="email" placeholder="Correo">
          </input>
          <input
          type="password"
          placeholder="Contraseña">
          </input>
        </form>
      </Modal>
      <Modal
      isOpen={isOpenChatModal} 
      isClose={closeChatModal}
      title="Chat">
        <p>Hola!! <b>-  Luis </b></p>
        <p>Que haces <b>-  Maria </b></p>
      </Modal>
     <GalleryModal 
      isOpen={isOpenGalleryModal}
      title="Gallery"
      isClose={closeGalleryModal}
     ></GalleryModal>
    </div>
  );
}

export default App;
