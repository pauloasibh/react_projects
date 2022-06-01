import React from 'react';
import './styles.css';
import Rota from './routes';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
 return (
   <div className="app">
     <Rota/>
     <ToastContainer autoClose={1500}/>
   </div>
 );
}