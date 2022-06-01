import React from 'react';
import {useEffect, useState} from 'react';
import "./favoritos.css";
import {toast} from 'react-toastify';
import { Button } from 'reactstrap';
import {Link} from "react-router-dom";


export default function Favoritos(){
    const [filmes, setFilmes] = useState([]);

    useEffect (() => {
        const minhaLista = localStorage.getItem('filmes');
        setFilmes(JSON.parse(minhaLista) || []);
    }, []);

    function handleDelete(id){
        let filtroFilmes = filmes.filter((item) => {
            return(item.id !== id)
        }
        )
        setFilmes(filtroFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
        toast.error("Filme excluido com sucesso", {theme: "colored"});

    }

    return(
        <div id="meus-filmes">
            <h1>Meus Filmes Salvos</h1>
            {filmes.length === 0 && <span>Nenhum filme incluído nos favoritos.</span>}
            <ul>
                {filmes.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.nome}</span>

                            <div>
                                
                                <Link to={`/filme/${item.id}`}><Button color="primary">Ver Detalhes</Button></Link>
                                <Button color="danger" onClick={() => handleDelete(item.id)}>Excluir</Button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}