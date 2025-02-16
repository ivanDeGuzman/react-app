import { useId, useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.css'
import ToDoForm from './components/ToDoForm'
import ToDo from './components/ToDo'
import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import React from 'react'
import ToDoWrapper from './components/ToDoWrapper'


function App() {
  const [todos, setTodos] = useState<any[]>([]);
  const addTodo = (name: any, priority: any, date: any) => {
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), taskName: name, taskPriority: priority, taskDate: date, completed: false, isEditing: false },
      // console.log(todos)
    ]);
  }

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <ToDoWrapper todos={todos} head = "Today"/>
        <ToDoWrapper todos={todos} head = "Upcoming"/>
        <ToDoWrapper todos={todos} head = "Missed"/>
      </Stack>
      {/* <Container>
        <Row>
          <Col><ToDoWrapper todos={todos}/></Col>
          <Col><ToDoWrapper todos={todos}/></Col>
          <Col><ToDoWrapper todos={todos}/></Col>
        </Row>
      </Container> */}
      {/* <div>
        <ToDoWrapper todos={todos}/>
        <ToDoWrapper todos={todos}/>
        <ToDoWrapper todos={todos}/>
      </div> */}
      <ToDoForm addTodo={addTodo}/>
    </>
  );
}

export default App
