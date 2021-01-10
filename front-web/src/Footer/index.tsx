import './styles.css';
import {ReactComponent as YouTubeIcom} from './youtube.svg';
import {ReactComponent as InstagramIcom} from './instagram.svg';
import {ReactComponent as LinkedinIcom} from './linkedin.svg';

function Footer(){
    return(
       <footer className="main-footer">
           App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
          <div>
              <a href="https://www.youtub.com/c/DevSuperior" target="_new">
                  <YouTubeIcom />
                  </a>        
                  <a href="https://www.linkedin.com/school/devSuperior" target="_new">
                      <InstagramIcom />
                  </a> 
                  <a href="https://www.instagram.com/devsuperior.ig" target="_new">
                      <LinkedinIcom />
                  </a>     
              </div>
       </footer>
    )
}

export default Footer;