import './error.css'
import {Link} from 'react-router-dom'

export default function Error(){
    return(
       <div className="container">
            <h1 className="text1">Ops!</h1> 
            <div className="text2">
                <h2>A página solicitada</h2> <h2>não foi encontrada :(</h2>
                <Link to="/" className='backHome'>Voltar para Home</Link>
            </div>
            
           
       </div>
    )
}