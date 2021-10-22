import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modularRoot = document.getElementById('modal');

const Modal = function ({children}){
    const elRef = useRef(null);
    if(!elRef.current){
        elRef.current = document.createElement('div');
    }
    useEffect(()=>{
        modularRoot.appendChild(elRef.current);
        return ()=> modularRoot.removeChild(elRef.current); 
    }, []);

    return createPortal(<div>{children}</div>, elRef.current);
}

export default Modal;