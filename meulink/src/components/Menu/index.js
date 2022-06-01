import './menu.css';
import {BsYoutube, BsInstagram} from 'react-icons/bs';
import {Link} from 'react-router-dom';

export default function Menu(){
    return(
        <div className='barMenu'>
            <BsYoutube className='icons'/> 
            <BsInstagram className='icons'/> 
            <Link to="/links"><button>Meus Links</button></Link>
        </div>
        
    )
}