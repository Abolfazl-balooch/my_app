export const Task = (props) => {
  return (
    <div
      className="task" 
      style={{ backgroundColor: props.completed ? "lightgreen" : "white" }}
    >
      <h1>{props.taskName}</h1>
      <div className="buttons">
        <button
          className="complete"
          onClick={() => props.completeTask(props.id)}
        >
    
        Complete
        </button>
        <button className="delete" onClick={() => props.deleteTask(props.id)}>
          X
        </button>
      </div>
    </div>
  );
};
