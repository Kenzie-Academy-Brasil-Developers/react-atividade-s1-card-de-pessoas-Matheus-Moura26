import './style.css'

function Pessoa({name,age,country}){
    
    return(
        <div className='card'>
            <label className='title'>"Dev: "{name}</label>
            <label>"Idade: "{age}</label>
            <label>"country: "{country}</label>

        </div>
    )
}

export default Pessoa