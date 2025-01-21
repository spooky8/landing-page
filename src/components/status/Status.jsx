import Aos from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import StatusImg from '../../assets/status.png'
import './Status.scss'

export const Status = () => {
	React.useEffect(() => {
		Aos.init({ duration: 1000 })
	}, [])

	return (
		<section className='status'>
			<div className='status__container wrapper'>
				<div className='status__left' data-aos='zoom-in-up'>
					<h2>Lorem Ipsum is simply dummy text</h2>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the standard dummy text ever since
						the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book.
					</p>
					<a href='#' className='btn'>
						KNOW MORE
					</a>
				</div>

				<div className='status__right' data-aos='fade-left'>
					<img src={StatusImg} alt='status' />
				</div>
			</div>
		</section>
	)
}

export default Status
