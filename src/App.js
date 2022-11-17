import logo from './logo.svg';
import './App.css';
import LoginBtn from './components/LoginBtn';
import LogoutBtn from './components/LogoutBtn';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
	const { isLoading, error } = useAuth0();

	return (
		<div className="App">
			<h1>Login</h1>
			{error && <p>Authentication Error</p>}
			{!error && isLoading && <p>Loading....</p>}
			{!error && !isLoading && (
				<>
					<LoginBtn />
					<LogoutBtn />
					<Profile />
				</>
			)}
		</div>
	);
}

export default App;
