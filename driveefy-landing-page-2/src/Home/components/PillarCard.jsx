import "./components.scss"
const PillarCard = ({icon, title, description}) => {
  return (
    <div className="pillar-card-container">
        <div className="pillar-card-icon">
            <img src={icon} alt="bar" />
        </div>
        <div className="pillar-card-title">
            <p>{title}</p>
        </div>
        <div className="pillar-card-description">
            <p>{description}</p>
        </div>
      
    </div>
  )
}

export default PillarCard
