import Footer from './components/shared/Footer/Footer'
import Main from './components/shared/Main/Main'
import Header from './components/shared/Header/Header'
import './App.scss';

export default function App() {
  return (
    <div className="app__wrapper" >
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
