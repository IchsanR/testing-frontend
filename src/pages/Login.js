import React from "react";

const Login = () => {
	const onLogin = () => {
		localStorage.setItem(
			"token",
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuYWtqYWxhbmFuNCIsImxldmVsIjowLCJpYXQiOjE2NjM2NjczMDJ9.YGlHLRd2Wt5FfGO60_Z6lOVvO40o-giUgWE7x0XG1ws"
		);
	};

	return (
		<div>
			<h1>Halaman Login</h1>
			<button onClick={() => onLogin()}>Login</button>
		</div>
	);
};

export default Login;
