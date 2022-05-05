import "./card.scss"
import avatar from "../../images/UserAvatar.png"

const Card = () => {
    return (<div className="card">
        <img src={avatar} alt="user-avatar"></img>
        <h2>User</h2>
        <h4>user@example.com</h4>
    </div>);
}

export default Card;