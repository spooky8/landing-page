import Aos from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { pricingInfo } from '../../Data'
import './Pricing.scss'

export const Pricing = () => {
	React.useEffect(() => {
		Aos.init({ duration: 1000 })
	}, [])

	return (
		<section id='catalog' className='pricing'>
			<h2 data-aos='fade-up'>Наши товары</h2>
			<div className='pricing__container wrapper'>
				{pricingInfo.map(({ image, name, price }) => (
					<div className='pricing__card' key={name} data-aos='fade-up'>
						<img src={image} alt='pricing' />
						<h3>{name}</h3>
						<span>{price}</span>
						<Link to={`/${name.toLowerCase()}`} className='btn'>
							Подробнее
						</Link>
					</div>
				))}
			</div>
		</section>
	)
}

export default Pricing
