            //props = {key="value",key1="value1",....}
function Perro({ name,perro,food,...restProps }){
    return <div>{name}</div>
} //<-- otra forma de utilizar los props


export default Perro;