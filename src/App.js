import './App.css';
import './components/FeedBackForm'
import React from 'react';
import FeedBackGrid from './components/FeedBackGrid';
import RoutesMain from './Routes';
import Header from './components/Header';

const App = () => (
  <>
  <Header/>
  <RoutesMain/>
  </>
);

export default App;
