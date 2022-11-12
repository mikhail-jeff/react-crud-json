import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './components/List';
import Create from './components/Create';
import Details from './components/Details';
import Edit from './components/Edit';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<List />}
				/>
				<Route
					path='/employee/create'
					element={<Create />}
				/>
				<Route
					path='/employee/details/:id'
					element={<Details />}
				/>
				<Route
					path='/employee/edit/:id'
					element={<Edit />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
