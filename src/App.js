import React from 'react';
import { Maths } from './components/Maths';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Rules } from './components/Rules';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Maths />
      <Rules />
      <Footer />
    </div>
  );
}

export default App;
