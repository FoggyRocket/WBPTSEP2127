

//dummy o para la banda un tonto

//default props
const ItemForm =({ label="Label",name="defaultName", onChange=()=>{} })=>(
    <div>
        <label>{label}</label>
        <input name={name} onChange={onChange}/>
    </div>
)
const FormStudent = () =>(
    <form>
        <ItemForm label="Name" name="header" />
        <ItemForm  label="Description" name="paragraph"/>
        <ItemForm label="Profile Pic" name="image"/>
        <button>send form</button>
    </form>
);

export default FormStudent;