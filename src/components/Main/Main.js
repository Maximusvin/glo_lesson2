import Layout from '../Layout/Layout';

const Main = () => (
  <main>
    <Layout>
      <div className="main">
        <h1 className="main-head">
          Заголовок c уникальным торговым предложение по системе 4U
        </h1>
        <div className="main-small">
          Описания предлжения компании. Сайт рыбатекст поможет дизайнеру,
          верстальщику, вебмастеру сгенерировать несколько абзацев более.
        </div>
        <button className="btn main-btn">
          <span>Подробнее</span>
        </button>
      </div>
    </Layout>
  </main>
);

export default Main;
