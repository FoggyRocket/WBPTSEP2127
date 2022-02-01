           //{key:value,key1:value1,...keyN:valueN} <- props {props.key1}
          // function Input({key,key1,key1})  <- {key}
function Input({
    name,
    placeholder="Input demo",
    disabled=false,
    textArea,
    rows=5,
    onChange=()=>{},
    required=false,
}){
    // ? : <--- if ternario
    return (
        <div className="uk-margin">
            { textArea ?
                <textarea
                    className="uk-textarea"
                    rows={rows}
                    placeholder={placeholder}
                    disabled={disabled}
                    name={name}
                    onChange={onChange}
                    required={required}
                    >
                </textarea>
            :
                <input
                disabled={disabled}
                className="uk-input"
                type="text"
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                required={required}
                />
            }
        </div>
    );
}

export default Input;