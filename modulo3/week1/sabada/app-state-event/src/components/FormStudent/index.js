

//dummy o para la banda un tonto

//default props
const ItemForm =({ label="Label",name="defaultName", onChange=()=>{} })=>(
    <div>
        <label>{label}</label>
        <input name={name} onChange={onChange}/>
    </div>
)
const FormStudent = ({onChange,sendData}) =>(
    <form onSubmit={sendData}>
        <ItemForm label="Name" name="header" onChange={onChange} />
        <ItemForm  label="Description" name="paragraph" onChange={onChange}/>
        <ItemForm label="Profile Pic" name="image" onChange={onChange}/>
        <button
            type="submit"
        >send form</button>
    </form>
);

export default FormStudent;