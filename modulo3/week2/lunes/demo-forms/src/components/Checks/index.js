//import Component de React
import {Component} from 'react'



class Checks extends Component{

    //this.props
    render(){
        const {radio,options,optionB,optionA,...restProps} = this.props
        return(
            <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                { radio  ?
                    <>
                        <label><input className="uk-radio" type="radio" {...restProps} defaultChecked={true} />{optionA}</label>
                        <label><input className="uk-radio" type="radio" {...restProps} /> {optionB}</label>
                    </>
                    :
                    <>
                    {options.map(({value,name},index)=><label key={index}><input  className="uk-checkbox" type="checkbox" {...restProps} value={value} /> {name}</label>)}
                    </>
                }
            </div>

            

        /* perro === true? (
            <div>
                <label>PerroA</label>
                <label>PerroB</label>
            </div>
                )
                :
                (
                <label>GatoA</label>
                <label>GatoB</label>
                )
        */

        )
    }
}

export default Checks