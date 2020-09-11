import React, {useState, useEffect, FunctionComponent} from 'react';
import {Labels} from '../../languages';
import  './style.css';
type ModalProps = {
    open: boolean,
    data: string
  }
const Modal: FunctionComponent<ModalProps> = ({open, data}) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    useEffect(() => {
        setOpen(open);
    }, [open]);
    const onCloseButtonClick = () => {
        setOpen(false);
    }
    return <>   
        <div className={`modal ${isOpen ? "show-modal" : ""}`}>
            <div className="modal-content">
                <span className="close-button" onClick={onCloseButtonClick}>×</span>
                <div className="content" dangerouslySetInnerHTML={{__html: data}}></div>                
                <p style={{'textAlign': 'center'}}><button type="button" onClick={onCloseButtonClick} className="btn">{`${Labels('ok')}`}</button></p>
            </div>
        </div>
    </>
};  
export default Modal;