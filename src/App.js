import { Suspense } from 'react'
// import logo from './logo.svg';
import './App.css';
import { Routes, BrowserRouter } from 'react-router-dom'
import { renderRouter } from './Routers';
function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          {renderRouter()}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
