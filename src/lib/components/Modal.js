import React, { Fragment } from "react"
import "./Modal.css"

const Modal = ({ text, closeAction }) => {
    return (
        <Fragment>
            <div className="modal-container">
                <div className="overlay modal-trigger"></div>
                <div className="modal">
                    <button
                        className="close-modal modal-trigger"
                        onClick={closeAction}
                    >
                        X
                    </button>
                    <p id="dialogDesc">{text}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Modal
