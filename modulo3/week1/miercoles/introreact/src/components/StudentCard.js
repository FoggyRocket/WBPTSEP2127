function StudentCard(props){
    console.log("props",props)
    return(
        <div>
            <span>Nombre: {props.firstName} </span>
            <span>Apellido: {props.lastName} </span>
            <span>Comida: {props.food}</span>
            <span>color: {props.color}</span>
        </div>
    );
}


export default StudentCard