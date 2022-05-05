import Header from "../../components/Header/Header";
import "./login.scss";


const Login = () => {
    return (<div className="login">
        <Header></Header>
        <div className="login-placeholder">
            <h3>username:</h3>
            <input type="text"></input>
            <h3>password:</h3>
            <input type="password"></input>
            <div className="login-container">
            <button>Login</button>
            </div>
        </div>
    </div>);
}

export default Login;