import "./app.css";
import {useState} from 'react';

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  function calcular() {
    const tamanho = altura/100*altura/100;
    const imc = peso / tamanho;
    if(imc <= 18.5) {
      setMessage("Abaixo do peso, seu imc é: " + imc.toFixed(1))
      setColor('red')
    }
    else if(imc > 18.5 && imc <= 24.9) {
      setMessage("Peso normal, seu imc é: " + imc.toFixed(1))
      setColor('green')
    }
    else if(imc > 24.9 && imc <= 29.9) {
      setMessage("Sobrepeso, seu imc é: " + imc.toFixed(1))
      setColor('red')
    }
    else if(imc > 29.9 && imc <= 39.9) {
      setMessage("Obesidade, seu imc é: " + imc.toFixed(1))
      setColor('red')
    }
    else if(imc > 39.9) {
      setMessage("Obesidade grave, seu imc é: " + imc.toFixed(1))
      setColor('red')
    }
    else{
      setMessage("não foi possivel calcular seu imc, revise os dados digitados")
      setColor('black')
    }
    
  }

  return (
    <div className="app">
        <div className="area-input">
          <h1>Calculadora IMC</h1>
          <input onChange={(x) => setPeso(x.target.value)} type="text" placeholder="Digite seu peso(em kg):" />
          <input onChange={(x) => setAltura(x.target.value)} type="text" placeholder="Digite sua altura(em cm):" />
          <button onClick={calcular}>Calcular</button>
          <label style={{color:color}}>{message}</label>
        </div>
    </div>
  );
}


