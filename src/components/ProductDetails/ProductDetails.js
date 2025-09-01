import classes from './ProductDetails.module.css'

export default function ProductDetails(){
    return(
        <div >
            <div className={classes.Pannel}>
                <img src="" className={classes.Img}/>
            </div>

            <div className={classes.DetailPane}>
                <div className={classes.Price}> 
                    <div className={classes.Yuan}>￥
                        <p className={classes.Money}>18</p>
                    </div>
                    <div className={classes.Discount}>
                        <p>立减</p>
                        <span>￥</span>
                        <span className={classes.Dis}>10</span>
                    </div>
                    <div className={classes.Save}>
                        <div className={classes.New}>新客专属</div>
                        <div className={classes.MoneySave}>约省<div>10</div>元</div>
                    </div>

                </div>

                        <div className={classes.Specs}>111</div>
                        <div className={classes.Description}>222</div>
                        <div className={classes.Comments}>333</div>

                
            </div>

        </div>
    )
}