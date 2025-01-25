import Aos from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import StatusImg from '../../assets/earnings_v4.png'
import './Status.scss'

export const Status = () => {
	React.useEffect(() => {
		Aos.init({ duration: 1000 })
	}, [])

	return (
		<section className='status'>
			<div className='status__container wrapper'>
				<div className='status__left' data-aos='zoom-in-up'>
					<h2>
						Качество, <br />
						Индивидуальный подход, <br />
						Доступные цены
					</h2>
					<p>
						Мы используем только качественные материалы и современное
						оборудование для изготовления металлоконструкций. Наши специалисты
						имеют большой опыт работы в этой области. <br />
						Мы учитываем все пожелания клиента и создаём металлоконструкции,
						которые соответствуют его потребностям и бюджету. <br />
						Мы предлагаем конкурентоспособные цены на наши услуги.
					</p>
					{/* <a href='#' className='btn'>
						KNOW MORE
					</a> */}
				</div>

				<div className='status__right' data-aos='fade-left'>
					<img src={StatusImg} alt='status' />
				</div>
			</div>
		</section>
	)
}

export default Status
