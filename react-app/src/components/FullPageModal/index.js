import './FullPageModal.css';

import React, { useEffect, useRef } from 'react';

const FullPageModal = ({ showModal, closeModal, children }) => {
  const modal = useRef(null);

  // NOTE NEED TO INCLUDE THE FOLLOWING IN PARENT COMPONENT:
  //// const [showModal, setShowModal] = useState(false);
  //// const openModal = () => {
  //// if (showModal) return; // do nothing if modal already showing
  //// setShowModal(true); // else open modal
  //// document.getElementById('root').classList.add('overflow');
  //// };
  //// const closeModal = () => {
  ////   if (!showModal) return; // do nothing if modal already closed
  ////   setShowModal(false); // else close modal
  ////   disable page scrolling:
  ////   document.getElementById('root').classList.remove('overflow');
  //// };

  //Check status of Modal
  useEffect(() => {
    //if modal already closed do nothing
    if (!showModal) return;

    // close modal upon click
    const eventListener = ({ target }) => {
      if (target !== modal.current && !modal.current?.contains(target)) {
        closeModal();
      }
    };

    //add event listener to entire document
    document.addEventListener('click', eventListener);

    //cleanup function - remove listener on dock
    return () => document.removeEventListener('click', eventListener);
  }, [showModal, closeModal]);

  // clone all children and add props to each
  const childrenWithProps = React.Children.map(children, (child) => {
    // if element is valid react element
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { closeModal });
    }
    return child;
  });

  return (
    <>
      {showModal && (
        <div className={`FullPageModal-background`}>
          <div className='FullPageModal-child-container' ref={modal}>
            {childrenWithProps}
          </div>
        </div>
      )}
    </>
  );
};

export default FullPageModal;
