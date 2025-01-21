import Aos from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import Img from '../../assets/earnings.png'
import './Earnings.scss'

export const Earnings = () => {
	React.useEffect(() => {
		Aos.init({ duration: 1000 })
	}, [])

	return (
		<section className='earnings'>
			<div className='earnings__container wrapper'>
				<div className='earnings__left' data-aos='fade-right'>
					<img src={Img} alt='earnings' />
				</div>
				<div className='earnings__right' data-aos='zoom-in-up'>
					<h2>Lorem Ipsum Lorem ipsum lorem ipsum</h2>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the standard dummy text ever since
						the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book.
					</p>
					<a href='#' className='btn'>
						GET STARTED
					</a>
				</div>
			</div>
		</section>
	)
}

export default Earnings
