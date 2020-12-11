import Section from './Section/Section';
import Header from './Header/Header';
import Main from './Main/Main';
import Features from './Features/Features';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Section className="features">
        <Features />
      </Section>
      <Section className="contact">
        <Contact />
      </Section>
      <Footer />
    </>
  );
}

export default App;
