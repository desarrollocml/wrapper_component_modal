import Modal from "./Modal";

export default function GalleryModal(props) {

  /* 
  <Modal title="New Gallery" {...props} > 
    de venir un title desde App.js New Gallery seria reemplazado por ese title
  <Modal {...props} title="New Gallery"></Modal> 
    de venir un title desde App.js New Gallery lo sobre escribiria
  */
  return (
    <Modal {...props} title="New Gallery">
      <h1>Photo</h1>
    </Modal>
  );
}
