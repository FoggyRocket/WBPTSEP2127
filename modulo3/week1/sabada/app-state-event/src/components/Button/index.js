import './buttonStyle.css'
            //({param1,param2,...n}= props)
function Button({ 
    type = "medium",
    label = "Text Button",
    onClick = ()=>{},
    buttonsType = "primary"
 }){

    return(
                            //{`${type} ${buttonsType}`}
        <button className={type + ' '+ buttonsType}  onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;