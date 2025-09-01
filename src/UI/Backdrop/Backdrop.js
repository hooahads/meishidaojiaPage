import ReactDOM from 'react-dom'
import classes from './Backdrop.module.css'

export default function Backdrop(props){
    return ReactDOM.createPortal(
        <div 
            {...props}
            className={`${classes.Backdrop} ${props.className}`}>
            {props.children}
        </div>, 
        document.getElementById('backdrop-root')
    );
}