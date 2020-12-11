import Layout from '../Layout/Layout';
import s from './Header.module.css';

const Header = () => (
  <header className={s.headerWrap}>
    <Layout>
      <div className={s.header}>
        <a href="#">
          <div className={s.headerLogo}></div>
        </a>
        <a href="tel:888" className={s.headerPhone}></a>
        <div className={s.headerPhonelink}>
          <a href="tel:7(962)556-1234">+7(962)556-1234</a>
        </div>
      </div>
    </Layout>
  </header>
);

export default Header;
