
import './App.css';
import api from '../src/services/api'
import {useState} from 'react'

function App() {

  const [url, setUrl] = useState('');
  async function getUser() {
    try {
      const response = await api.post("", {
        destination: 'http://www.gmail.com',

      });
      console.log(response.data.shortUrl);
      setUrl(response.data.shortUrl);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <h1>{url}</h1>
      <button onClick={() => getUser()}>gerar</button>
    </div>
  );
}

export default App;
