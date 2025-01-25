import Aos from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'
import './Footer.scss'

export const Footer = () => {
	React.useEffect(() => {
		Aos.init({ duration: 1000 })
	}, [])

	return (
		<footer id='contacts' className='footer'>
			<div className='footer__container wrapper' data-aos='fade-up'>
				<div className='footer__col'>
					<h3>Контакты</h3>
					<p>
						<strong>Телефон:</strong> +7 (913) 036-29-06
					</p>
					<p>
						<strong>Дополнительный телефон:</strong> +7 (913) 206-33-35
					</p>
					<div className='footer__icons'>
						<a
							href='https://t.me/ShunkovNikolay'
							className='footer__icon'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaTelegram />
						</a>
						<a
							href='https://wa.me/qr/LO4GIPNKGMA3N1'
							className='footer__icon'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaWhatsapp />
						</a>
					</div>
				</div>
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
