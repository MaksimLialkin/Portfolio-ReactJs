import classes from './Hamburger.module.css'

const Hamburger = () => {
    return (
        <div className={classes.hamburger}>
            <span></span>
            <span className={classes.hamburgerLong}></span>
            <span></span>
        </div>
    )
}

export default Hamburger