import classes from './HeaderInner.module.css'

const HeaderInner = (props) => {
    return (
        <div className={classes.headerInner}>
            <div className={`${classes.headerInner_name} ${classes.headerName}`}>Меня зовут Максим Лялькин</div>
            <div className={classes.headerInner_title}>Я frontend-разработчик
                    город Москва</div>
            <div className={classes.headerInner_btns}>
                <a href="" className={`${classes.headerInner_link} ${classes.btn}`}>Портфолио</a>
                <a href="" className={classes.headerInner_link}>Обо мне</a>
            </div>
            {props.message}
        </div >

    )
}

export default HeaderInner

