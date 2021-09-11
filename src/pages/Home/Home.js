import './home.css'
import Header from '../../components/header/Header'
import CtaLogo1 from '../../assets/images/cta-logo-one.svg'
import CtaLogo2 from '../../assets/images/cta-logo-two.png'

const Home = (props) => {
  return (
    <div className="main-container">
      <Header />
      <div className="background-image"></div>
      <div className="content-container">
        {/* <CtaLogo1 className='ctaLogo1' /> */}
        <img src={CtaLogo1} alt="Disney Plus" />
        <button className="subscriptions">Get All Three</button>
        <span className="description">
          Get Premier Access to Raya and the Last Dragon for an addiotional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          the Disney Bundle has increased by $1.
        </span>
        <img
          className="disneyPkgLogo"
          src={CtaLogo2}
          alt="disney group package"
        />
      </div>
    </div>
  )
}

export default Home
