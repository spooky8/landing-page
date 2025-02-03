import Aos from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import Mob from '../../assets/logo/Mob.png'
import './Hero.scss'

export const Hero = () => {
	React.useEffect(() => {
		Aos.init({ duration: 1000 })
	}, [])

	return (
		<section id='about' className='hero'>
			<div className='hero__container wrapper'>
				<div className='hero__left' data-aos='fade-right'>
					<img src={Mob} alt='hero' />
				</div>

				<div className='hero__right' data-aos='zoom-in-up'>
					<h1>СибирьМеталлМонтаж</h1>
					<p>
						Компания, которая специализируется на изготовлении и установке
						металлоконструкций. Мы предлагаем широкий спектр услуг -
						<br /> от откатных и распашных ворот до лестниц, навесов и заборов.
					</p>
					{/*<a href='#' className='btn'>
						Lorem Ipsum
					</a> */}
				</div>
			</div>
		</section>
	)
}

export default Hero
