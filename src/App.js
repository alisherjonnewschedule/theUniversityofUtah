import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Teachers from './components/Teachers';

function App() {
	return (
		<Router>
				<Route component={Header} />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/about' component={About} />
					<Route exact path='/teachers' component={Teachers} />
				</Switch>
				<Route component={Footer} />
		</Router>
	);
}

export default App;
