import './App.css';
import Category from './components/Category/Category';
import Content from './components/Content/Content';
import Cover from './components/UI/Cover/Cover';
import Header from './components/UI/Header/Header';
import { useSelector } from 'react-redux'
import Joke from './components/Joke/Joke';
import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
function App() {

  const { category } = useSelector(state => state.category)

  return (
    <div className="App">
      <Header />
      <Cover />
      <Routes>
        <Route path='/' element={
          <Fragment><Category />
            <Content category={category} /></Fragment>
        }>

        </Route>
        <Route path='/:id' element={<Joke />} />
      </Routes>
    </div>
  );
}

export default App;
