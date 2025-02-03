import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useState } from 'react'
import './Entry.scss'

export const Entry = () => {
	const API_URL = import.meta.env.VITE_API_URL

	React.useEffect(() => {
		Aos.init({ duration: 1000 })
	}, [])

	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		message: '',
		file: null,
	})

	const handleChange = e => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleFileChange = e => {
		const selectedFile = e.target.files[0]
		setFormData({ ...formData, file: selectedFile })
	}

	const handleSubmit = async e => {
		e.preventDefault()
		const data = new FormData()
		data.append('name', formData.name)
		data.append('phone', formData.phone)
		data.append('email', formData.email)
		data.append('message', formData.message)
		if (formData.file) {
			data.append('file', formData.file)
		}

		try {
			const response = await fetch(API_URL, {
				method: 'POST',
				body: data,
			})
			console.log('ОК:', response)
		} catch (error) {
			console.error('Ошибка:', error)
		}
	}

	return (
		<section id='entry' className='entry'>
			<div className='entry__container wrapper'>
				<h2 data-aos='fade-up'>Получите бесплатную консультацию</h2>
				<p data-aos='fade-up'>
					Заполните форму, наш менеджер свяжется с Вами в ближайшее время
				</p>
				<form onSubmit={handleSubmit} data-aos='fade-up'>
					<div className='input-group'>
						<input
							type='text'
							name='name'
							placeholder='Ваше имя'
							required
							onChange={handleChange}
						/>
						<input
							type='tel'
							name='phone'
							placeholder='Ваш телефон'
							required
							onChange={handleChange}
						/>
					</div>
					<input
						type='email'
						name='email'
						placeholder='Ваш email'
						required
						onChange={handleChange}
					/>
					<textarea
						name='message'
						placeholder='Ваше сообщение'
						required
						onChange={handleChange}
					/>
					<label className='file-upload'>
						<input type='file' name='file' onChange={handleFileChange} />
						<span>
							{formData.file ? formData.file.name : 'Прикрепить файл'}
						</span>
					</label>
					<button type='submit' className='btn'>
						Получить консультацию
					</button>
				</form>
			</div>
		</section>
	)
}

export default Entry
