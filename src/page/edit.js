import { useState, useEffect } from "react";
import http from "../http";

import { useNavigate, useParams } from "react-router-dom";
export default function Edit(props) {
    const [inputs, setInputs] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = () => {
        http.get('/user/' + id + '/edit').then(res => {
            setInputs({
                name: res.data.name,
                email: res.data.email,
            });
        });
    }

    const navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const submitForm = () => {
        console.log(inputs);
        http.put("/user/" + id, inputs).then((res) => {
            console.log(res);
            navigate('/');
        })
    }


    return (
        <div>
            <h1>Edit</h1>
            <div className="row">
                <div className="col-sm-6 justify-contect-center">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" value={inputs.name || ''} onChange={handleChange} />

                    <label className="mt-2">Email</label>
                    <input type="text" name="email" className="form-control" value={inputs.email || ''} onChange={handleChange} />

                    <button type="button" onClick={submitForm} className="btn btn-info mt-3">Submit</button>
                </div>
            </div>
        </div>
    )
}
