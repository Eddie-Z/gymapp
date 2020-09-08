import React from 'react';

const Login = (props) => (
    <nav className="login">
        <h2>Login</h2>
        <p> sign in to manage workouts</p>
        <button className="github" onClick={()=> props.authenticate('Github')}>Login With Github</button>
    </nav>

);
export default Login;