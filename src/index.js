import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boat from "./pages/Boat";
import Boxes from "./pages/Boxes";
import Emergent from "./pages/Emergent";
import Jacket from "./pages/Jacket";
import Library from "./pages/Library";
import Lyre from "./pages/Lyre";
import Norden from "./pages/Norden";
import Shoes from "./pages/Shoes";
import Wardrobe from "./pages/Wardrobe";
import Banner from "./components/Banner"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout';

export default function SuperApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="boat" element={<Boat />} />
          <Route path="boxes" element={<Boxes />} />
          <Route path="emergent" element={<Emergent />} />
          <Route path="jacket" element={<Jacket />} />
          <Route path="library" element={<Library />} />
          <Route path="lyre" element={<Lyre />} />
          <Route path="norden" element={<Norden />} />
          <Route path="shoes" element={<Shoes />} />
          <Route path="wardrobe" element={<Wardrobe />} />
          {/* This route matches any other path, error handling */}
          <Route path="*" element={<App />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <SuperApp />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
