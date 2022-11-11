import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listing from './components/Listing';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Listing />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
