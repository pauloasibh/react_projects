import './modal.css';
import { AiOutlineCloseCircle, AiOutlineCopy } from 'react-icons/ai'
import {useState} from 'react'

export default function Modal({close, content}){

    const [sucess, setSucess] = useState(false);

    async function copyLink(){
        await navigator.clipboard.writeText(content.link)
        setSucess(true);
    }
    return(
        <div className='modalLink'>
            <div className='modalHeader'>
                <span className='headerTitle'>Link Encurtado:</span>
                <button onClick={close} className='headerButton'><AiOutlineCloseCircle className='headerIcon'/></button>
            </div>
            <div className='modalBody'>
                <span className='modalSpan'>{content.long_url}</span>
                <div className='modalShorten'>
                    <span className='shortenSpan'>{content.link}</span>
                    <button onClick={copyLink} className='headerButton'><AiOutlineCopy className='copyIcon'/></button>
                </div>
                {sucess && (
                    <label className='sucess'>Seu link foi copiado com sucesso!</label>
                )}

            </div>
        </div>
    )
}