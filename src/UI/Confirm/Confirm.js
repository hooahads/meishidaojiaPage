import Backdrop from '../Backdrop/Backdrop'
import classes from './Confirm.module.css'

export default function Confirm(props){
    return(
        <Backdrop
            className={classes.ConfirmOuter}
        >
            <div className={classes.Confirm}>
                <p className={classes.ConfirmText}>{props.ConfirmText}</p>

                <div>
                    <button 
                        className={classes.Cancel}
                        onClick={(e)=>{props.onCancel(e)}}
                    >取消</button>
                    <button
                        className={classes.Ok}
                        onClick={(e)=>{props.onOk(e)}}
                    >确认</button>
                </div>
            </div>
        </Backdrop>
    )
}