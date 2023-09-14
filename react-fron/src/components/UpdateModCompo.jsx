import React,{ useState } from 'react';
import { Modal , Button } from 'react-bootstrap';

function UpdateModCompo() {
    const [isShow, invokeModal] = useState(false);

    const initModal = () => {
        return invokeModal(!isShow);
    }
  return (
    <>
    <Button variant='success' onClick={ initModal }>
        Edit/Update
    </Button>

    <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
         <Modal.Title>Update Post</Modal.Title>   
        </Modal.Header>
        <Modal.Body>
            This is Update React bootstrap Modal!
        </Modal.Body>
        <Modal.Footer>
            <Button variant='danger' onClick={initModal}>
                Close
            </Button>
            <Button variant='dark' onClick={initModal}>
                Update
            </Button>
        </Modal.Footer>
    </Modal>

    </>
  )
}

export default UpdateModCompo