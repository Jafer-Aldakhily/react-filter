import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom'
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
