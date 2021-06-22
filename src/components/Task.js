import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
      <div
        className={`task ${task.reminder ? 'reminder' : ''}`}
        onDoubleClick={() => onToggle(task.id)}
      >
        <h4>
          {task.name}{' '}
          <FaTimes
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={() => onDelete(task.id)}
          />
        </h4>
        <h5>{task.email}</h5>
        <h5>{task.designation}</h5>
        <h5>Mobile No. {task.number}</h5>
      </div>
  )
}

export default Task
