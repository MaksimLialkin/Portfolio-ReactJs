import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.header}>
            <div className='container'>
                <div className={classes.headerInner}>
                    <div className={`${classes.headerInner_name} ${classes.headerName}`}>Меня зовут Максим Лялькин</div>
                    <div className={classes.headerInner_title}>Я frontend-разработчик
                    город Москва</div>
                    <div className={classes.headerInner_btns}>
                        <a href="" className={`${classes.headerInner_link} ${classes.btn}`}>Портфолио</a>
                        <a href="" className={classes.headerInner_link}>Обо мне</a>
                    </div>
                </div >
            </div >
            <div className={classes.headerLink}>
                <div className={classes.headerLink_title}>Социальные сети</div>
                <a href="#"><img className={classes.headerLogo} src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" alt="" /></a>
                <a href="#"><img className={classes.headerLogo} src="https://image.flaticon.com/icons/png/512/87/87390.png" alt="" /></a>
                <a href="#"><img className={classes.headerLogo} src="https://i.pinimg.com/originals/ca/3b/f0/ca3bf05cfab74677e5b73b130bd30991.png" alt="" /></a>
            </div>
        </div >
    )
}

export default Header