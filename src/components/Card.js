function Card({ title, className, children }) {
  return <div className={`card ${className}`}>
    <div className="card-title">
      {title}
    </div>
    <div className="card-content">
      {children}
    </div>
  </div>;
}

export default Card;