import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SimpleComponent} from './components/SimpleComponent';
import EnhancedComponent from './components/EnhancedComponent';
import EnhancedComponentAsync from './components/EnhancedComponentAsync';

function App() {
  return (
    <main>
      <SimpleComponent></SimpleComponent>
      <EnhancedComponent></EnhancedComponent>
      <EnhancedComponentAsync></EnhancedComponentAsync>
    </main>
  );
}

export default App;
