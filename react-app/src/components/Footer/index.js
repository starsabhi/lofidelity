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
              <a href='https://github.com/Amlovern' target='_blank' rel='noreferrer'>
                <img
                  src={githubLogo}
                  height='20px'
                  alt='github'
                ></img>
              </a>
              <a href='https://github.com/Amlovern' target='_blank' rel='noreferrer'>
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
              <a href='https://github.com/otter23' target='_blank' rel='noreferrer'>
                <img
                  src={githubLogo}
                  height='20px'
                  alt='github'
                ></img>
              </a>
              <a href='https://www.linkedin.com/in/elankatz/' target='_blank' rel='noreferrer'>
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
              <a href='https://github.com/thisismydisplay' target='_blank' rel='noreferrer'>
                <img
                  src={githubLogo}
                  height='20px'
                  alt='github'
                ></img>
              </a>
              <a href='https://github.com/thisismydisplay' target='_blank' rel='noreferrer'>
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
              <a href='https://github.com/starsabhi' target='_blank' rel='noreferrer'>
                <img
                  src={githubLogo}
                  height='20px'
                  alt='github'
                ></img>
              </a>
              <a href='https://www.linkedin.com/in/abhishek-bornak-semasna514865/' target='_blank' rel='noreferrer'>
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
