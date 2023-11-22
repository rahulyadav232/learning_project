import { Component } from 'react';
import './App.css';
import Header from './components/Headers/Header';
import Main from './components/Mains/Main';
import Category from './components/Category/Category';
import Forum from './components/Forums/Forum'
import Top from './components/Top/Top';

function App() {
  return (
   
    <div>
      <Top></Top>
    <Header></Header>
    <Main></Main>
    <Category></Category>
    <Forum></Forum>
    </div>

  );
}

export default App;
