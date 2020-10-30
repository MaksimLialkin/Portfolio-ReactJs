import Hamburger from './Hamburger/Hamburger'
import classes from './Header.module.css'
import HeaderInner from './HeaderInner/HeaderInner'
import HeaderLink from './HeaderLink/HeaderLink'

const Header = (props) => {
    return (
        <div className={classes.header}>
            <Hamburger />
            <div className='container'>
                {props.name}
                <HeaderInner message="Hello" />
                <HeaderInner message="Hi" />
            </div >
            <HeaderLink />
        </div >
    )
}

export default Header