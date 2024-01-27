import './Footer.css';

import React from 'react';

import githubLogo from '../../images/github.svg';
import linkedInLogo from '../../images/linkedin.svg';

export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-container-inner'>
        <div className='footer-developed-by'>Developed by:</div>
        <div className='footer-developerList'>
          <div className='footer-developer-name'>
            <div>Anthony Lovern</div>
            <div className='footer-image-links'>
              <a
                href='https://github.com/Amlovern'
                target='_blank'
                rel='noreferrer'
              >
                <img src={githubLogo} height='20px' alt='github'></img>
              </a>
              <a href='https://www.linkedin.com/in/anthonylovern/' target='_blank' rel='noreferrer'>
                <img
                  src={linkedInLogo}
                  height='25px'
                  alt='linkedIn'
                ></img>
              </a>
            </div>
          </div>

          <div className='footer-developer-name'>
            <div>Elan Katz</div>
            <div className='footer-image-links'>
              <a
                href='https://github.com/otter23'
                target='_blank'
                rel='noreferrer'
              >
                <img src={githubLogo} height='20px' alt='github'></img>
              </a>
              <a
                href='https://www.linkedin.com/in/elankatz/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={linkedInLogo} height='25px' alt='linkedIn'></img>
              </a>
            </div>
          </div>

          <div className='footer-developer-name'>
            <div>Mark Osman</div>
            <div className='footer-image-links'>
              <a
                href='https://github.com/thisismydisplay'
                target='_blank'
                rel='noreferrer'
              >
                <img src={githubLogo} height='20px' alt='github'></img>
              </a>
              <a
                href='https://www.linkedin.com/in/markrockwellosman/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={linkedInLogo} height='25px' alt='linkedIn'></img>
              </a>
            </div>
          </div>

          <div className='footer-developer-name'>
            <div>Abhishek Bornak</div>
            <div className='footer-image-links'>
              <a
                href='https://github.com/starsabhi'
                target='_blank'
                rel='noreferrer'
              >
                <img src={githubLogo} height='20px' alt='github'></img>
              </a>
              <a
                href='https://www.linkedin.com/in/abhishek-bornak-semasna514865/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={linkedInLogo} height='25px' alt='linkedIn'></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
