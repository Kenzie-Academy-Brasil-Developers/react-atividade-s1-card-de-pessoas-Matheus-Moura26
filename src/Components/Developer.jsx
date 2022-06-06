import './style.css'

function Pessoa(props){
    
    return(
        <div className='card'>
            <label className='title'>"Dev: "{props.name}</label>
            <label>"Idade: "{props.age}</label>
            <label>"country: "{props.country}</label>

        </div>
    )
}

export default Pessoa