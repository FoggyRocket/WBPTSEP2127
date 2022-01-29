import './CardStudentStyles.css'
//             //props = {key="value",key1="value1",....}
// function Perro({name,perro,food,...restProps}){
//     return <div>{name}</div>
// } <-- otra forma de utilizar los props

function CardStudent(props){
    return(
        <div className='CardContainer'>
            <img src={props.image} />
            <h3>{props.header}</h3>
            <p>{props.paragraph}</p>
        </div>
    );
}

export default CardStudent;