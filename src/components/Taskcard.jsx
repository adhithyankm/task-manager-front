import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
// import { getTasks } from '../services/allapi';



function Taskcard({ displayData, removeTask }) {

  console.log(displayData);

  const [starredTasks, setStarredTasks] = useState([]);

  const toggleStar = (id) => {
    if (starredTasks.includes(id)) {
      setStarredTasks(starredTasks.filter((taskId) => taskId !== id));
    } else {
      setStarredTasks([...starredTasks, id]);
    }
  };

  


  return (
    <div className='taskcard-container'>

      {
        displayData.length > 0 ?
          displayData.map((item) => (

            <Card key={item._id} className='taskcard' >
              <Card.Body>
              <div className={`star-icon ${starredTasks.includes(item._id) ? 'starred' : ''}`} onClick={() => toggleStar(item._id)}>
                &#9733;
              </div>
                {/* <Card.Text>{item.index}</Card.Text> */}
                <Card.Title className='taskcard-title'>{item.task}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted taskcard-info">{item.info}</Card.Subtitle>
                <hr />
                <div className='taskcard-details'>
                  <p>Client Details</p>
                  <p>Name: {item.name}</p>
                  <p>Email: {item.email}</p>
                </div>


                <div className='taskcard-actions'>
                  <Link to={`/edit/${item._id}`} className='action-button btn btn-primary'>
                    Edit
                  </Link>
                  <div onClick={() => removeTask(item._id)} className='action-button btn btn-danger'>
                    Delete
                  </div>
                </div>


              </Card.Body>
            </Card>
          )) : <p>No task to display</p>
      }
    </div>
  )
}

export default Taskcard