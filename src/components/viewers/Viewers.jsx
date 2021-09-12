import './viewers.css'
import ViewerDisney from '../../assets/images/viewers-disney.png'
import ViewerMarvel from '../../assets/images/viewers-marvel.png'
import ViewerNational from '../../assets/images/viewers-national.png'
import ViewerPixar from '../../assets/images/viewers-pixar.png'
import ViewerStarWars from '../../assets/images/viewers-starwars.png'

const Viewers = () => {
  return (
    <div className="viewers-area-container">
      <div className="viewer1 viewers">
        <img src={ViewerDisney} alt="Disney" />
      </div>
      <div className="viewer2 viewers">
        <img src={ViewerMarvel} alt="Marvel" />
      </div>
      <div className="viewer3 viewers">
        <img src={ViewerNational} alt="National" />
      </div>
      <div className="viewer4 viewers">
        <img src={ViewerPixar} alt="Pixar" />
      </div>
      <div className="viewer5 viewers">
        <img src={ViewerStarWars} alt="Star Wars" />
      </div>
    </div>
  )
}

export default Viewers
