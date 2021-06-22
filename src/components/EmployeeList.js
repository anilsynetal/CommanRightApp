import { React, useEffect, useState } from 'react'
function TaskList() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  
  return (
    <div className="studentlist">
      <div className="container">
        <table className="w-100 bg-white list-table">
          <tr>
            <th>Employee Name </th>
            <th>Designation</th>
            <th>Contact Number </th>
          </tr>
     {
       tasks && tasks.length>0 && tasks.map((task)=>
           <tr >
             <td>{task.name}</td>
             <td>{task.designation}</td>
             <td>{task.number}</td>
          </tr>
     )}
     </table>
     </div>
    </div>
  );
}

export default TaskList
