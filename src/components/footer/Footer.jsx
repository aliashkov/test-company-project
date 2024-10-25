
import './footer.css';
import emailIcon from '../../icons/mailIcon.png';
import mapIcon from '../../icons/mapIcon.png';
import phoneIcon from '../../icons/phoneIcon.png';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <a href="mailto: gena.bondarev@gmail.com" target='_blank'>
          <img src={ emailIcon } alt="email icon" width="36"/>
        </a>
        <a
         href="https://www.google.com/maps/place/%D0%BE%D1%84%D0%B8%D1%81+430,+%D1%83%D0%BB.+%D0%9C%D0%B5%D0%BB%D0%B5%D0%B6%D0%B0+1,+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA,+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C+220113/@53.9393773,27.6016971,21z/data=!4m15!1m8!3m7!1s0x46dbcf152053a0a1:0x68899ec442a1f476!2z0L7RhNC40YEgMjAxIDIyMDExMywg0YPQuy4g0JzQtdC70LXQttCwIDEsINCc0LjQvdGB0LosINCc0LjQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGM!3b1!8m2!3d53.9395067!4d27.6012209!16s%2Fg%2F11mpdbb0rt!3m5!1s0x46dbcf151f121a95:0xccbf5a5f7d3b7dba!8m2!3d53.9394638!4d27.6016378!16s%2Fg%2F11r11djqr7!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MTAyMi4wIKXMDSoASAFQAw%3D%3D" 
          target='_blank' 
          rel="noopener noreferrer"
        >
          <img src={ mapIcon } alt="map icon"/>
        </a>
        <a href="tel:=+375296204099" target='_blank'>
          <img src={ phoneIcon } alt="phone icon"/>
        </a>
      </div>
    </div>
  )
}

export default Footer;
