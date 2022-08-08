// import logo from './logo.svg';
// import './App.css';
import GlobalState from './Global/GlobalState';
import Router from './Router/Router';

function App() {
	return (
		<GlobalState>
			<Router />
		</GlobalState>
	);
}

export default App;
