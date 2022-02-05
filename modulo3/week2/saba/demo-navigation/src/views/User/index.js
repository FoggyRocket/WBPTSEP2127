
import { useLocation,useParams } from "react-router-dom";

function User(){

    const params = useParams()
    console.log("en el user",params)
    //req.params = { }
    return(
        <div>
            <p>user: {params.name} </p>
        </div>
    );
}

export default User