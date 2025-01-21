import {
	Companies,
	Earnings,
	Footer,
	Hero,
	Navbar,
	Pricing,
	Status,
	Subscribe,
} from './components'

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Companies />
			<Pricing />
			<Earnings />
			<Status />
			<Subscribe />
			<Footer />
		</>
	)
}

export default App
