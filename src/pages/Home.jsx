import { Companies, Footer, Hero, Navbar, Pricing, Status } from '../components'

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Companies />
			{/* <Earnings /> */}
			<Status />
			<Pricing />
			{/* <Subscribe /> */}
			<Footer />
		</>
	)
}

export default Home
