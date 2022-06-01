import React from 'react';
import { Button } from 'reactstrap';
import {Link} from "react-router-dom";
import './erro.css';

export default function Erro(){
    return(
        <div className='error-page'>
            <spam className="code">404</spam>
            <h3>Página não encontrada</h3>
            <Link to="/"><Button color='primary'>Ver Todos Os Filmes</Button></Link>
        </div>
    )
}