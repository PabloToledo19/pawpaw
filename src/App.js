
import './App.css';
import Header from './components/header/header'
import Imag from './components/imag/Imag';
import Doggylist from './components/doggylist/Doggylist';
import Banner from './components/banner/Banner';
import Guzik from './components/Guzik/Guzik';
import ContactForm from './components/contact-form/ContactForm';
import Stopka from './components/footer/Footer';
function App() {
  return (
    <>
      <Header />
      <Imag />
      <Doggylist />
      <Guzik/>
      <Banner />
      <ContactForm />
      <Stopka/>

    </>

  );
}

export default App;

