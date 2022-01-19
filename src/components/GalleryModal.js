import Modal from "./Modal";

export default function GalleryModal({isOpen,title,isClose}) {
  return (
        <Modal 
        isOpen={isOpen}
        title={title}
        isClose={isClose}
        >
            <h1>Photo</h1>
        </Modal>
    )
}
