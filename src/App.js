import emconstrucao from './assets/emconstrucao.png';
import logo from './assets/logo.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Margin"><img src={logo} alt="logo"/></h1>
        <h2 className="Margin">Fusão, Aquisição, Desenvolvimento de Negócios</h2>
        <img src={emconstrucao} className="App-logo" alt="Em construção" />
        <p className="Paragraf">
          Fone: <b>19 99122.8252</b> | E-mail: <b>os@osen.com.br</b><br/>
          End. Av. Washington Luiz, 1955 – Sala 02 – Vila Marieta – Campinas/ SP – CEP 13.142-105
        </p>

      </header>
    </div>
  );
}

export default App;
