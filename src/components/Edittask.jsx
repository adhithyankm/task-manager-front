import React, { useContext, useEffect, useState } from 'react'
import { Button, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { registerContext } from './ContextShare';
import { editTask, getTasks } from '../services/allapi';



function Edittask() {
    // contest state
    const { registerData, setRegisterData } = useContext(registerContext)
    console.log(registerData);

    // state for holding the inputs
    const [inputs, setInputs] = useState({
        task: "", info: "", email: "", name: ""
    })

    const navigate = useNavigate()

    // getand set inputs 

    const {id}=useParams()

    useEffect(() => {
      getAtask()
    
     
    }, [])
    


    const getAtask=async()=>{
        const {data}=await getTasks("")
        console.log(data);

        let existingTask=data.find(item=>item._id===id)
        setInputs(existingTask)
    }

    const getandsetInputs = (e) => {
        const { name, value } = e.target

        setInputs({ ...inputs, [name]: value })
    }
    console.log(inputs);

    const handleSubmit = async (e) => {
        e.preventDefault()

        // destructuring 

        const { task, info, email, name } = inputs

        if (!task || !info || !email || !name) {
            alert('Please fill the form completly ')
        }
        else {
            const data = new FormData()

            data.append("task", task)
            data.append("info", info)
            data.append("email", email)
            data.append("name", name)

            const headers = {
                "content-type": "application/json"
            }
            // api
           const result =await editTask(id,data,headers)
           console.log(result);
           if(result.status===200){
            navigate("/")
           }
           else{
            alert("request failed")
           }
        }
    }
    return (
        <div className='task shadow p-5  ' style={{ width: "350px", margin: "40px auto" }}  >

        <h3>Edit Task</h3>

        <Form >
            <Row>


                {/* task */}
                <FloatingLabel controlId="floatingTask"
                    label="Task"
                    className="mb-3"
                >
                    <Form.Control type="text" name='task' onChange={e => getandsetInputs(e)} placeholder="Task" value={inputs.task} />
                </FloatingLabel>
                {/* task info */}
                {/* <FloatingLabel controlId="floatingInfo" label="info" className="mb-3">
                    <Form.Control type="textarea" name='info' placeholder="info" />
                </FloatingLabel> */}

                <FloatingLabel
                    controlId="floatingTextarea"
                    label="info"
                    className="mb-3"
                >
                    <Form.Control name='info' as="textarea" onChange={e => getandsetInputs(e)} value={inputs.info} placeholder="Leave a comment here" />
                </FloatingLabel>


                {/* email */}
                <FloatingLabel controlId="floatingEmail" label="email" className="mb-3">
                    <Form.Control type="email" name='email' onChange={e => getandsetInputs(e)} value={inputs.email} placeholder="email" />
                </FloatingLabel>
                {/* name */}
                <FloatingLabel controlId="floatingName" label="name" className="mb-3">
                    <Form.Control type="text" name='name' onChange={e => getandsetInputs(e)} value={inputs.name} placeholder="date" />
                </FloatingLabel>
                {/* moblie */}



            </Row>
            <div className='d-flex'>
                <Button type='submit' onClick={e => handleSubmit(e)}>Update</Button>
                <div className='ms-2 btn btn-danger'> <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>Cancel</Link>  </div>

            </div>
        </Form>
    </div>
    )
}

export default Edittask