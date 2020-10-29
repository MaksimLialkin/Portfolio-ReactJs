import Hamburger from './Hamburger/Hamburger'
import classes from './Header.module.css'
import HeaderInner from './HeaderInner/HeaderInner'
import HeaderLink from './HeaderLink/HeaderLink'

const Header = () => {
    return (
        <div className={classes.header}>
            <Hamburger />
            <div className='container'>
                <HeaderInner />
            </div >
            <HeaderLink />
        </div >
    )
}

export default Header