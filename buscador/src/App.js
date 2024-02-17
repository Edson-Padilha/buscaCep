import { FiSearch } from 'react-icons/fi';
import './style.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Busca Cep</h1>
      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite seu cep..."
        />
        <button className="buttonSearch">
          <FiSearch size={25} color='#FFF'/>
        </button>
      </div>
        <main className='main'>
          <h2>CEP: 89254-230</h2>
          <span>Rua: Emilio Klitzke</span>
          <span>Complemento: Próximo a sorveteria</span>
          <span>Bairro: Três Rios do Sul</span>
          <span>Cidade: Jaraguá do Sul - SC</span>
        </main>
    </div>
  );
}

export default App;
