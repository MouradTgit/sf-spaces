import logo from './logo.svg'
import './POPOSSpace.css'

function POPOSSpace({ name, address, image }) {
  return (
    <div className="POPOSSpace">
      <img
        className="POPOSSpace-image"
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        alt={name}
      />
      <h1 className="POPOSSpace-title">{name}</h1>
      <div className="POPOSSpace-address">{address}</div>
    </div>
  )
}

export default POPOSSpace