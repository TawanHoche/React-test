import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Aside from './components/Aside'


const App = () => {
  return(
    <div className='App'>
      <Header/>
      <div className="content">
        <Main/>
        <Aside/>
      </div>
      <Footer/>
    </div>
  )
}

export default App;