import './links.css';
import {useEffect, useState} from 'react'
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import { getLinksSave, deleteLink } from '../../services/storeLinks';
import Modal from '../../components/Modal';

export default function Links() {
    const [myLinks, setMyLinks] = useState([]);
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [emptyList, setEmptyList] = useState(false);

    useEffect(() => {
        async function getlinks(){
            const result = await getLinksSave('@encurtaLink')
            if(result.length === 0){
                setEmptyList(true);
            }
            setMyLinks(result);
        }
        getlinks();
    }, [] )

    function handleOpenLink(Link){
        setData(Link);
        setShowModal(true);
    }

    async function handleDelete(id){
        const result = await deleteLink(myLinks, id)
        if(result.length === 0){
            setEmptyList(true);
        }
        setMyLinks(result);
    }

    return(
        <div className='containerLinks'>
            <div className='titleArea'>
              <Link to="/"><FiArrowLeft size={50}/></Link>  
              <h1>Meus Links</h1>
            </div>

            {emptyList && (
                <div>
                    <span className='emptySpan'>A lista está vazia</span>
                </div>
            )}

            {myLinks.map( link => (
                <div key={link.id} className='linkArea'>
                    <FiLink />
                    <a href={() => false} onClick={() => handleOpenLink(link)}>{link.long_url}</a>
                    <button onClick={() => handleDelete(link.id)}><FiTrash color="red" size={20}/></button>
                </div>
            ))}

            {showModal && (
                <Modal 
                close={() => setShowModal(false)} 
                content={data}/>
            )}

        </div>
    )

}