import * as uuid from "uuid";


export const mockData = [{ isDone: false, task: "Task 1", date: "2023-10-01", time: "12:00", id: 1 },
{ isDone: false, task: "Task 2", date: "2023-10-01", time: "12:00", id: 2 },
{ isDone: false, task: "Task 3", date: "2023-10-01", time: "12:00", id: 3 },
{ isDone: false, task: "Task 4", date: "2023-10-01", time: "12:00", id: 4 },
{ isDone: false, task: "Task 5", date: "2023-10-01", time: "12:00", id: 5 },]

// Insert sample data
export const sampleTodos = [
    {
        id: uuid.v4(),
        task: 'Buy groceries',
        time: Date.now(),
        is_done: false,
    },
    {
        id: uuid.v4(),
        task: 'Walk the dog',
        time: Date.now(),
        is_done: true,
    },
];