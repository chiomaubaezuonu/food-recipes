import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div className='footer'>
            <a href="https://web.facebook.com/reel/624830593097899"><FontAwesomeIcon className='fb' icon={faFacebook} /></a>
            <a href="https://twitter.com/ChiomaPresh1029"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href=""> <FontAwesomeIcon icon={faLinkedin} /></a>
            <FontAwesomeIcon icon={faInstagram} />
        </div>
    )
}

export default Footer