import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header"
import Layout from './components/Layout/Layout';
import Menu from './components/menu/Menu';
function App() {
  return (
    <div className="App">
      < Header />
      
      <Menu />
      <Layout />
    </div>
  );
}

export default App;
