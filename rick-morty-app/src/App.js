import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Characters from './Components/Characters';
import Episodes from './Components/Episodes';

const App = () => {
  const routes = (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />}/>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );

  return (
    <>
      <Navbar />
      {routes}
    </>
  );
};

export default App;
