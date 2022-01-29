//Componente Funcional pero de clase
import {Component} from 'react';
import './themeStyle.css'
//class para clase 
//1) export default class ThemeComponent extends Component {
class ThemeComponent extends Component {
    state={
        count:0,
        name:'Kiki',
        data:{},
        dataForm:{},
        basicInput:'',
        //perro:'Kevin'
        theme:'light'
    }

    //this.setState({perro:'Kevin'})
    /*
    oldSchool
    constructor(){
        super()
        this.state={}
    }
    onPerro()
    */

    //creamos un method!!!
    selectTheme = (e) =>{
        const {name,value} = e.target
        console.log("SelecTheme",name,value)

        this.setState({ theme:value})
    }
    //El render 
    render(){
        console.log("Los props de la class",this.props)
        return(
            <div className={'Theme ' + this.state.theme}>
                <p>Hola</p>
                <label>Choose a theme:</label>
                <select onChange={ this.selectTheme } name="theme" >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
        )
    }
}


//2)
export default ThemeComponent