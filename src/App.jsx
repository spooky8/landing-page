import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AwningsParking from './pages/catalog/AwningsParking'
import Fences from './pages/catalog/Fences'
import FireStairs from './pages/catalog/FireStairs'
import Porch from './pages/catalog/Porch'
import SlidingGates from './pages/catalog/SlidingGates'
import Stairs from './pages/catalog/Stairs'
import SwingGates from './pages/catalog/SwingGates'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/откатные ворота' element={<SlidingGates />} />
				<Route path='/распашные ворота' element={<SwingGates />} />
				<Route path='/заборы' element={<Fences />} />
				<Route path='/навесы, парковки' element={<AwningsParking />} />
				<Route path='/крыльцо' element={<Porch />} />
				<Route path='/лестницы' element={<Stairs />} />
				<Route path='/пожарные лестницы' element={<FireStairs />} />
				<Route path='*' element={<Home />} />
			</Routes>
		</Router>
	)
}

export default App
