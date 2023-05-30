import React from 'react';
import { createRoot } from 'react-dom/client';
import Banner from './Banner';
import ImageGrid from './ImageGrid';
import AppRoutes from './AppRoutes';
import '../App.css';

const App = () => {
  return (
    <div className="app">
      <Banner />
      <AppRoutes />
      <ImageGrid />
    </div>
  );
};

// Use createRoot from react-dom/client
const root = createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
