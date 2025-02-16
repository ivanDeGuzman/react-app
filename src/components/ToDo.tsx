import { ButtonGroup, FormGroup, ToggleButton } from "react-bootstrap";

function ToDo ({task}) {
    return (
        <div className="bg-light p-1 m-2 rounded d-flex">
            <label>
                <input type="checkbox" className="mx-2"/>
                <span className="fs-5 mx-1">{task.taskName}</span><br />
                <span className="fs-6">{task.taskDate}</span>
            </label>
        </div>
    );
}

export default ToDo;