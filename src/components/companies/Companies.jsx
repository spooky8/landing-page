import Aos from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import { companyInfo } from '../../Data'
import './Companies.scss'

export const Companies = () => {
	React.useEffect(() => {
		Aos.init({ duration: 1000 })
	}, [])

	return (
		<section className='companies'>
			<div className='companies__container wrapper' data-aos='fade-up'>
				{companyInfo.map(({ id, img, text }) => (
					<div key={id} className='companies__card'>
						<img src={img} alt='company' key={id} />
						<h3>{text}</h3>
					</div>
				))}
			</div>
		</section>
	)
}

export default Companies
