
export default function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }  

  return (
    
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${props.img}`} alt="none" className="card--image" />
      <div className="card--stats">
        <img src="../images/star.svg" className='card--star'/>
        <span>{props.rate}</span>
        <span className='gray'>{props.rated} • </span>
        <span className='gray'>USA</span>
      </div>
      <p >{props.description}</p>
      <p><span className='bold'>From {props.price} </span> / person</p>
    </div>
  );
}
