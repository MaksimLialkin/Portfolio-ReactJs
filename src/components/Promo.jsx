const Header = () => {
    return (
        <div className="promo">
            <div className='container'>
                <div className='promo-inner'>
                    <div className="promo-inner__name subtitle-name">Меня зовут Максим Лялькин</div>
                    <div className="promo-inner__title">Я frontend-разработчик
                    город Москва</div>
                    <div className="promo-inner__btns">
                        <a href="" className="promo-inner__link btn">Портфолио</a>
                        <a href="" className="promo-inner__link">Обо мне</a>
                    </div>
                </div>
            </div>
            <div className="promo-link">
                <div className="promo-link__title">Социальные сети</div>
                <a href="#"><img className='promo-logo' src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" alt="" /></a>
                <a href="#"><img className='promo-logo' src="https://image.flaticon.com/icons/png/512/87/87390.png" alt="" /></a>
                <a href="#"><img className='promo-logo' src="https://i.pinimg.com/originals/ca/3b/f0/ca3bf05cfab74677e5b73b130bd30991.png" alt="" /></a>
            </div>
        </div>
    )
}

export default Header