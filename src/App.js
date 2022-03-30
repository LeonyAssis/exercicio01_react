import Header from './components/Header';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Articles from './components/Articles';
import Sidemenu from './components/Sidemenu';

function App() {
  return (
    <div className="App">
      <Header />

      <Navbar />
      <div class="container">
        <div class="row">
          <Articles />
          <Sidemenu/>
        </div>
      </div>


    </div>
  );
}

export default App;
