import { useState } from "react";
import http from "../http";
import { useNavigate } from "react-router-dom";
export default function Create() {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }
    const submitForm = () =>{
        console.log(inputs);
        http.post("/user",inputs).then((res)=>{
            console.log(res);
            navigate('/');
        })
    }
    
   
    return (
        <div>
            <h1>Add</h1>
            <div className="row">
                <div className="col-sm-6 justify-contect-center">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" value={inputs.name||''} onChange={handleChange}/>

                    <label className="mt-2">Email</label>
                    <input type="text" name="email" className="form-control" value={inputs.email||''} onChange={handleChange}/>

                    <label className="mt-2">Password</label>
                    <input type="text" name="password" className="form-control" value={inputs.password||''} onChange={handleChange}/>

                    <button type="button" onClick={submitForm} className="btn btn-info mt-3">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}
