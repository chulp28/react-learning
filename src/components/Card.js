import './Card.css';

function Card({ username, title, body }) {
  return (
    <div className="Card">
      <h4>{username}</h4>
      <h2>{title}</h2>
      <h3>{body}</h3>
    </div>
  );
}

export default Card;
