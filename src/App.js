//icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Main />
      <Footer />
      <BackToTop/>
    </>
  )
}

export default App;
