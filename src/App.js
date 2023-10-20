import { Component } from 'react';
import './App.css';
import Header from './components/Headers/Header';
import Main from './components/Mains/Main';
import Category from './components/Category/Category';
import Forum from './components/Forums/Forum'

function App() {
  return (
   
    <div>
    <Header></Header>
    <Main></Main>
    <Category></Category>
    <Forum></Forum>
    </div>

  );
}

export default App;
