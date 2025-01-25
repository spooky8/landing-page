import Aos from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import './Footer.scss'

export const Footer = () => {
	React.useEffect(() => {
		Aos.init({ duration: 1000 })
	}, [])

	return (
		<footer id='contacts' className='footer'>
			<div className='footer__container wrapper' data-aos='fade-up'>
				<div className='footer__col'>
					<h3>Реквизиты</h3>
					<p>
						<strong>ИНН:</strong> 246523664706
					</p>
					<p>
						<strong>ОГРН/ОГРНИП:</strong> 322547600083769
					</p>
					<p>
						<strong>Расчетный счет:</strong> 40802810200003365561
					</p>
				</div>

				<div className='footer__col'>
					<h3>Банковские реквизиты</h3>
					<p>
						<strong>Банк:</strong> АО «ТБанк»
					</p>
					<p>
						<strong>ИНН банка:</strong> 7710140679
					</p>
					<p>
						<strong>БИК банка:</strong> 044525974
					</p>
				</div>

				<div className='footer__col'>
					<p>
						<strong>Корреспондентский счет:</strong> 30101810145250000974
					</p>
					<p>
						<strong>Юридический адрес банка:</strong> 127287, г. Москва, ул.
						Хуторская 2-я, д. 38А, стр. 26
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
