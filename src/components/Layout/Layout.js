import s from './Layout.module.css';

const Layout = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};

export default Layout;
