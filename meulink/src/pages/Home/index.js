import './home.css';
import linkimg from '../../images/link.png';
import {FiLink} from 'react-icons/fi';
import Menu from '../../components/Menu';
import Modal from '../../components/Modal';
import { useState } from 'react';
import api from '../../services/api';
import {saveLink} from '../../services/storeLinks'

export default function Home() {

    const [link, setLink] = useState('');
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [modal, setModal] = useState(false);

    async function handleShortLink() {
        setError(false);
        setModal(false);
        try{
            const response = await api.post('/shorten', {
                long_url: link 
            })
            setData(response.data)
            setModal(true);
            saveLink('@encurtaLink', response.data)
            setLink('');
            
        }catch{
            setError(true)
            setLink('');
        }
    }


    return(
        <div className='containerHome'>
            <img alt="logo" src={linkimg} height={100} width={200} />
            <h1>Shorten Links</h1>
            <label>Cole seu link para encurtar 👇 </label>
            <div className='inputArea'>
                <FiLink />
                <input onChange={e => setLink(e.target.value)} value={link} type="text" placeholder="Cole seu link aqui!"/>
            </div>
            <button className='buttonGeraLink' onClick={handleShortLink}>Gerar Link</button>
            {error && (
                <label className='error'>Link incorreto, digite novamente.</label>
            )}

            <Menu />
            {modal && (
                <Modal 
                close={() => setModal(false) }
                content={data}
                />
            )
            }
            
            
        </div>
        
        
    )

}