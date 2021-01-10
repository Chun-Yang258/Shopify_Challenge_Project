import React, { Fragment, useState } from "react";

import { Modal, Button } from "react-bootstrap";

export default function InventoryItem(props){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        alert("implement delete image function!")
    }

    const { description, id, name, price, src, stock } = props.item

    return (
        <Fragment>
            <tr key={id}>
                <td className="image_space">
                    <img src={src} alt={name} className="img-thumbnail" />
                </td>
                <td >
                    <h4>{name}</h4>
                    <br />
                    <p>{description}</p>
                </td>
                <td >
                    {price}
                </td>
                <td >
                    {stock}
                </td>
                <td >
                    <img src="images/trash.png" alt="delete" className="trash" onClick={handleShow}/>
                </td>
            </tr>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-danger">WARNING</Modal.Title>
                </Modal.Header>
                <Modal.Body>You are about to DELETE this image! Are you sure you want to proceed with this action?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        CANCEL
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        DELETE
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
   
}