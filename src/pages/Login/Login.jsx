import Header from "../../components/Header/Header";
import "./login.scss";
import { UserContext } from "../../App";
import { useContext } from "react";


const Login = () => {

    const {userToken, setUserToken} = useContext(UserContext);


    return (<div className="login-container">
        <Header></Header>
        <main className="main">

        <div className="login-placeholder">
            <h3 className="username">username:</h3>
            <input type="text"></input>
            <h3 className="password">password:</h3>
            <input type="password"></input>
            <div className="login-button">
            <button>Login</button>
            </div>
        </div>
        </main>
    </div>);
}

export default Login;