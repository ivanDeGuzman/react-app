import { Card } from "react-bootstrap";
import ToDo from "./ToDo";

function ToDoWrapper ({todos, head}) {
    // function checkHigh(value) {
    //     return value.task === "High"
    //   }
      
    //   function checkMedium(value) {
    //     return value === "Medium"
    //   }
      
    //   function checkLow(value) {
    //     return value === "Low"
    //   }

    const highPriority = todos.filter(value => value.taskPriority.includes("High"));
    const mediumPriority = todos.filter(value => value.taskPriority.includes("Medium"));
    const lowPriority = todos.filter(value => value.taskPriority.includes("Low"));
  

    // const highPriority = todos.filter(value => value.TaskPriority.includes("High"));
    // const mediumPriority = todos.filter(value => value.TaskPriority.includes("Medium"));
    // const lowPriority = todos.filter(value => value.TaskPriority.includes("Low"));

    return(
        <Card className = "bg-dark" style={{ width: '30rem' }}>
            <Card.Body>
            <Card.Title className="text-white">{head}</Card.Title>
            <Card.Subtitle className="mb-2 text-white">High Priority</Card.Subtitle>
            <div>
                {highPriority.map((todo, index) => (
                    <ToDo task={todo} key={index}/>
                ))}
            </div>
            <Card.Subtitle className="mb-2 text-white">Medium Priority</Card.Subtitle>
            <div>
                {mediumPriority.map((todo, index) => (
                    <ToDo task={todo} key={index}/>
                ))}
            </div>
            <Card.Subtitle className="mb-2 text-white">Low Priority</Card.Subtitle>
            <div>
                {lowPriority.map((todo, index) => (
                    <ToDo task={todo} key={index}/>
                ))}
            </div>
            <div>
            </div>
            </Card.Body>
        </Card>
    ) 
}

export default ToDoWrapper;