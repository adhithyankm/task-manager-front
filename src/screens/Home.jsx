import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import Taskcard from '../components/Taskcard'
import { deleteTask, getTasks } from '../services/allapi'



function Home() {

  const [alltaskData, setallTaskData] = useState([])
  useEffect(() => {
    getAllTasks()
  }, [])


  const getAllTasks = async () => {
    const response = await getTasks()
    console.log(response);

    if (response.status == 200) {
      setallTaskData(response.data)
    }
    else {
      alert("cannot fetch data")
    }

  }
  // console.log(alltaskData);

  const removeTask = async (id) => {
    const response = await deleteTask(id)

    if (response.status === 200) {
      getAllTasks()
    }
    else {
      alert('operation failed! pls try after sometime')
    }
  }

  return (
    //   <div className='home-container'>
    //   <div className='m-5'>
    //     <Link className='task-link' to={'/addtask'}>
    //       Enter New Task
    //     </Link>
    //   </div>
    //   <Taskcard />
    // </div>

    // =========
 




      <div className='m-3 home-container'>

        <div className='m-5' >
        {/* style={{ textDecoration: "none", fontWeight: "bold", border: "1px solid black", padding: "10px" }} */}
          <Link className='task-link'  to={'/addtask'}>Enter New Task </Link>
        </div>

        <Taskcard displayData={alltaskData} removeTask={removeTask} />





      </div>

   
  )
}

export default Home