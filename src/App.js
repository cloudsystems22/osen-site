import emconstrucao from './assets/emconstrucao.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Margin">OSEN <br /><span className='Subtitle'>Especialista em negócios</span></h1>
        <h2 className="Margin">Fusão, Aquisição, Desenvolvimento de Negócios</h2>
        <img src={emconstrucao} className="App-logo" alt="logo" />
        <p>
          19 99122.8252 |E-mail: os@osen.com.br <br/>
          End. Av. Washington Luiz, 1955 – Sala 02 – Vila Marieta – Campinas/ SP – CEP 13.142-105
        </p>

      </header>
    </div>
  );
}

export default App;
