import './App.css';
import Category from './components/Category/Category';
import Content from './components/Content/Content';
import Cover from './components/UI/Cover/Cover';
import Header from './components/UI/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Cover />
      <Category />
      <Content />
    </div>
  );
}

export default App;
