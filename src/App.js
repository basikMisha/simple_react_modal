import AnimatedModal from './components/AnimatedModal';
import Modal from './components/Modal';
import './style.scss'
function App() {
 

  return (
    <div className="App">
      <>
        <Modal><p>Modal window text</p></Modal>
        <AnimatedModal> <h2>Content</h2> </AnimatedModal>
      </>
    </div>
  );
}

export default App;
