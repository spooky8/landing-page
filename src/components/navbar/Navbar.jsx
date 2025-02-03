import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoMenu } from 'react-icons/io5'
import Logo from '../../assets/logo/logo_v4.png'
import './Navbar.scss'

export const Navbar = () => {
	const [showNav, setShowNav] = React.useState(false)

	return (
		<header className='navbar'>
			<nav className='navbar__container wrapper'>
				<a href='/' className='navbar__logo' onClick={() => setShowNav(false)}>
					<img src={Logo} alt='Logo' />
				</a>

				<ul className={`${showNav ? 'show' : ''}`}>
					<li onClick={() => setShowNav(false)}>
						<a href='#about'>О нас</a>
					</li>
					<li onClick={() => setShowNav(false)}>
						<a href='#catalog'>Каталог</a>
					</li>
					<li onClick={() => setShowNav(false)}>
						<a href='#contacts'>Контакты</a>
					</li>
				</ul>

				{/* <div className='navbar__btns'>
					<a href='#'>Вход</a>
					<a href='#' className='btn'>
						Регистрация
					</a>
				</div> */}

				<div className='navbar__menu' onClick={() => setShowNav(!showNav)}>
					{showNav ? <IoMdClose /> : <IoMenu />}
				</div>
			</nav>
		</header>
	)
}

export default Navbar
