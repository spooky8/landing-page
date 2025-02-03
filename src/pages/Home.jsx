import {
	Companies,
	Entry,
	Footer,
	Hero,
	Navbar,
	Pricing,
	Status,
} from '../components'

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
			<Entry />
			<Footer />
		</>
	)
}

export default Home
