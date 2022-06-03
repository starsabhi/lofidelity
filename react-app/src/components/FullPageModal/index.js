import './FullPageModal.css';

import React, { useEffect, useRef } from 'react';

const FullPageModal = ({ showModal, setShowModal, children }) => {
  const modal = useRef(null);

  // NOTE NEED TO INCLUDE IN PARENT COMPONENT:
  //// const [showModal, setShowModal] = useState(false);
  //// const openModal = () => {
  //// if (showModal) return; // do nothing if menu already showed
  //// setShowModal(true); // else open modal
  //// document.getElementById('root').classList.add('overflow');
  //// };

  //Check status of Modal
  useEffect(() => {
    //if modal already closed do nothing
    if (!showModal) return;

    const closeModal = ({ target }) => {
      if (target !== modal.current && !modal.current?.contains(target)) {
        setShowModal((prev) => !prev);
        //allow page scrolling again:
        document.getElementById('root').classList.remove('overflow');
      }
    };

    //add event listener to entire document
    document.addEventListener('click', closeModal);

    //cleanup function
    return () => document.removeEventListener('click', closeModal);
  }, [showModal, setShowModal]);

  //on submit dispatch deletePhotoThunk

  return (
    <>
      {showModal && (
        <div className={`FullPageModal-background`}>
          <div className='FullPageModal-child-container' ref={modal}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default FullPageModal;
