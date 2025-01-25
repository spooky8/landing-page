import React from 'react'
import Navbar2 from '../../components/navbar/Navbar2'
import './catalog.scss'

const Stairs = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const images = import.meta.glob('../../assets/лестницы/*.{jpg,jpeg}', {
		eager: true,
	})

	return (
		<>
			<Navbar2 />
			<div className='swing-gates-container'>
				<h1>Лестницы</h1>
				<div className='images-grid'>
					{Object.values(images).map((image, index) => (
						<div key={index} className='image-wrapper'>
							<img
								src={image.default}
								alt={`Лестницы ${index + 1}`}
								className='gallery-image'
							/>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Stairs
