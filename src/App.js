import logo from './logo.svg';
import './App.css';
import LoginBtn from './components/LoginBtn';
import LogoutBtn from './components/LogoutBtn';

function App() {
	return (
		<div className="App">
			<h1>Login</h1>
			<LoginBtn />
			<LogoutBtn />
		</div>
	);
}

export default App;
