import classes from './MenuBar.module.css'
import { NavLink,Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export default function MenuBar(){
    const navigate=useNavigate();
    return(
        <div className={classes.Pane}>
            <ul className={classes.Bars}>                
                <li 
                    onClick={()=>navigate('/delicacies')}
                    className={classes.Bar}>           
                    <img className={classes.Img} src='./imgs/666.jpg'/> 
                    <span className={classes.Title}>美食</span>
                </li>

                <li 
                    onClick={()=>navigate('/drinks')}
                    className={classes.Bar}>            
                    <img className={classes.Img} src='./imgs/888.jpg'/>
                    <span className={classes.Title}>饮品</span>
                </li>

                <li 
                    onClick={()=>navigate('/hamburg')}
                    className={classes.Bar}>           
                    <img className={classes.Img} src='./imgs/111.jpg'/>
                    <span className={classes.Title}>汉堡</span>
                </li>

                <li 
                    onClick={()=>navigate('/chicken')}
                    className={classes.Bar}>           
                    <img className={classes.Img} src='./imgs/bbb.jpg'/>
                    <span className={classes.Title}>炸鸡</span>
                </li>

                <li 
                    onClick={()=>navigate('/chicken')}
                    className={classes.Bar}>
                    <img className={classes.Img} src='./imgs/444.jpg'/>
                    <span className={classes.Title}>披萨</span>
                </li>

                <li 
                    onClick={()=>navigate('/chicken')}
                    className={classes.Bar}>
                    <img className={classes.Img} src='./imgs/555.jpg'/>
                    <span className={classes.Title}>面包</span>
                </li>

                <li 
                    onClick={()=>navigate('/chicken')}
                    className={classes.Bar}>
                    <img className={classes.Img} src='./imgs/777.jpg'/>
                    <span className={classes.Title}>鲜花</span>
                </li>

                <li 
                    onClick={()=>navigate('/chicken')}
                    className={classes.Bar}>
                    <img className={classes.Img} src='./imgs/aaa.jpg'/>
                    <span className={classes.Title}>蛋糕</span>
                </li>

                <li 
                    onClick={()=>navigate('/chicken')}
                    className={classes.Bar}>
                    <img className={classes.Img} src='./imgs/222.jpg'/>
                    <span className={classes.Title}>热狗</span>
                </li>
                
                <li 
                    onClick={()=>navigate('/chicken')}
                    className={classes.Bar}>
                    <img className={classes.Img} src='./imgs/999.jpg'/>
                    <span className={classes.Title}>水果</span>
                </li>
            </ul>
        </div>
    )
}
