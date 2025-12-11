// src/components/Footer.jsx

import React from 'react';
import imagemogrs from '../asset/logo2.png';
import imageindipaz from '../asset/imageidpaz.png';
import imageuam from '../asset/imageuam.png';

import './Footer.css';

const Footer = ({ t }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top-row">
          {/* 左边三张图片横向展示 */}
          <div className="footer-left">
            <img src={imagemogrs} alt="imagemogrs" className="footer-logo-img" />
            <img src={imageindipaz} alt="imageidipaz" className="footer-logo-img" />
            <img src={imageuam} alt="imageuam" className="footer-logo-img" />
          </div>

          {/* 右边三个链接按钮 */}
          <div className="footer-right">
            <a className="footer-link" href="https://www.hulp.es/" target="_blank" rel="noopener noreferrer">HULP</a>
            <a className="footer-link" href="https://www.idipaz.es/" target="_blank" rel="noopener noreferrer">IdiPAZ</a>
            <a className="footer-link" href="https://www.uam.es/" target="_blank" rel="noopener noreferrer">UAM</a>
          </div>
        </div>

        {/* 底部版权和创作者 */}
        <div className="footer-bottom-text">
          <span>{t('footer-text')}</span>
          <span className="footer-creator">©2025 by Yuheng He & Claudia Vila</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
