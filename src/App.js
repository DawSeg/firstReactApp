import Home from './components/Home/Home';
import Container from './components/Container/Container'
import NavBar from './components/Navbar/NavBar'
import About from './components/About/About';
import Favourite from './components/Favourite/Favourite';
import { Routes, Route } from 'react-router-dom';
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/favourite' element={<Favourite />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
 </main>
  );
}

export default App;