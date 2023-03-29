import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './login.css'


function Login() {

	const navigate = useNavigate();

	const [data, setData] = useState({
		username: '',
		password: ''
	});

	const [isValid, setIsValid] = useState(true);

	const changeHandler = (e) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	const checkUser = () => {
		if (data.username === 'foo' && data.password === 'bar') {
			navigate("/home");
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	}

	const login = () => {
		checkUser();
	}
	return (
		<div className='center'>
			<form>for
				<h2>Login</h2>
				<div className="container">
					<label htmlFor="uname"><b>Username</b></label>
					<input type="text"
						placeholder="Enter Username"
						name="username" required
						value={data.username}
						onChange={changeHandler}></input>

					<label htmlFor="psw"><b>Password</b></label>
					<input
						type="password"
						placeholder="Enter Password"
						value={data.password}
						name="password" required
						onChange={changeHandler} />
					<input type="button" onClick={login} value="Login" />
				</div>
				{!isValid && <label style={{ color: 'red' }}>username or password incorrect.</label>}
			</form>
		</div>
	)
}


export default Login;
