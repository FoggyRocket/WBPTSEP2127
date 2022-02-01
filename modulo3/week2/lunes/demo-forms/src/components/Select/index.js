
                // utilizo () porque no tiene funcionalidad
const Select = ({
    options=[],
    ...restProps
}) =>(
    <div className="uk-margin">
        <select 
            className="uk-select" 
            {...restProps}
            /*
            name={name}
            onChange={onChange}
            required={true}
            */
            >
            <option>Select one</option>
            {/*options.map(({value,name,...restOption},index)=> <option key={index} value={value}>{name}</option>)*/}
            {options.map((option,index)=> <option key={index} value={option.value}>{option.name}</option>)}
        </select>
    </div>
)

export default Select;