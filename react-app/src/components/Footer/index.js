import './Footer.css';
import githubLogo from '../../images/github.svg';
import linkedInLogo from '../../images/linkedin.svg';

const Footer = () => {
  return (
    <div className='footerDiv'>
      <div className='footDivContent'>
        <div className='developerList'>
          <div className='DevelopedbyClass'>Developed by:</div>
          <div className='smallName'>
            Anthony Lovern
            <div className='divLinks'>
              <a href='https://github.com/Amlovern'>
                <img
                  src={githubLogo}
                  height='20px'
                  alt='github'
                ></img>
              </a>
              <a href='https://github.com/Amlovern'>
                <img
                  src={linkedInLogo}
                  height='25px'
                  alt='linkedIn'
                ></img>
              </a>
            </div>
          </div>
          <div className='smallName'>
            Elan Katz
            <div className='divLinks'>
              <a href='https://github.com/otter23'>
                <img
                  src={githubLogo}
                  height='20px'
                  alt='github'
                ></img>
              </a>
              <a href='https://www.linkedin.com/in/elankatz/'>
                <img
                  src={linkedInLogo}
                  height='25px'
                  alt='linkedIn'
                ></img>
              </a>
            </div>
          </div>
          <div className='smallName'>
            Mark Osman
            <div className='divLinks'>
              <a href='https://github.com/thisismydisplay'>
                <img
                  src={githubLogo}
                  height='20px'
                  alt='github'
                ></img>
              </a>
              <a href='https://github.com/thisismydisplay'>
                <img
                  src={linkedInLogo}
                  height='25px'
                  alt='linkedIn'
                ></img>
              </a>
            </div>
          </div>
          <div className='smallName'>
            Abhishek Bornak
            <div className='divLinks'>
              <a href='https://github.com/starsabhi'>
                <img
                  src={githubLogo}
                  height='20px'
                  alt='github'
                ></img>
              </a>
              <a href='https://www.linkedin.com/in/abhishek-bornak-semasna514865/'>
                <img
                  src={linkedInLogo}
                  height='25px'
                  alt='linkedIn'
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
