import React, {useState, useEffect} from 'react';
import {pluck} from '../../utils';
import {Labels} from '../../languages';
import  './style.css';
const Modal = (props : any) => {
    const {open, data} = props;
    const {capital, languages, currencies, population, name} = data;
    const language = pluck(languages || [], 'name');
    const currency = pluck(currencies || [], 'name');
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
                <p><strong>{`${Labels('country')}`} :</strong> {`${name}`}</p>
                <p><strong>{`${Labels('capital')}`} :</strong> {`${capital}`}</p>
                <p><strong>{`${Labels('population')}`} :</strong> {`${population}`}</p>
                <p><strong>{`${Labels('language')}`} :</strong> {`${language}`}</p>
                <p><strong>{`${Labels('currency')}`} :</strong> {`${currency}`}</p>
                <p style={{'textAlign': 'center'}}><button type="button" onClick={onCloseButtonClick} className="btn">{`${Labels('ok')}`}</button></p>
            </div>
        </div>
    </>
};  
export default Modal;