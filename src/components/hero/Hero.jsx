import Aos from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import Mob from '../../assets/Mob.png'
import './Hero.scss'

export const Hero = () => {
	React.useEffect(() => {
		Aos.init({ duration: 1000 })
	}, [])

	return (
		<section className='hero'>
			<div className='hero__container wrapper'>
				<div className='hero__left' data-aos='fade-right'>
					<img src={Mob} alt='hero' />
				</div>

				<div className='hero__right' data-aos='zoom-in-up'>
					<h1>Lorem Ipsum</h1>
					<p>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using Content here, content
						here, making it look like readable English.
					</p>
					<a href='#' className='btn'>
						Lorem Ipsum
					</a>
				</div>
			</div>
		</section>
	)
}

export default Hero
