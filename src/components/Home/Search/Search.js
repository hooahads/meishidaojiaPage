import classes from './Search.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Link,useNavigate } from 'react-router-dom';

export default function Search() {
    const navigate=useNavigate();
    return(
        <div className={classes.FilterMeals}>
            <div className={classes.boxflex}>
                <FontAwesomeIcon
                    icon={faSearch}
                    className={classes.Searchbar}
                />
                
                <input
                    // value={keyword}
                    type='text'
                    // onChange={inputChangeHandler}
                    onClick={() => navigate('/filter')}
                    className={classes.Input}
                    placeholder='请输入关键字'
                    
                />
                <div className={classes.Search}
                    onClick={() => navigate('/filter')}
                >搜索</div>
                
            </div>
        </div>
    )
}