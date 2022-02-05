import { Component } from "react";



class User extends Component{

    //Detecta cuando el componente dejara de existir
    componentWillUnmount(){
        console.log("Desactivar listenner")
    }
    //Espia si se actualiza
    componentDidUpdate(prevProps,prevState){
        // if(this.props.perro !== this.state.perro){

        // }
    }
    

    //Metodo muy importante
    render(){
        return(
            <div>
                <p>Dylan</p>
                <p>Torres</p>
                <p>Foggyrocket</p>
            </div>
        );
    }
    //cuando los elemtnos de html o jsx se muestran se ejecuta el didMount
    componentDidMount(){
        //
    }
}


export default User
