// Partial<T>

interface Task{
  id: number
  name: string
  description: string
}

function updateTask(id: string, task: Partial<Task>){

}

const newTask = { name: 'Carlos'}

updateTask('1', newTask)

//Required<T>
interface Todo {
  id?: number
  name?: string
}

const myTodo: Required<Todo> = {
  id: 1, name: 'Carlos'
}

// Records<Keys, Types> para la creacion de objetos
// { key: value }

interface CatInfo {
  age: number
  name: string
}

type CatName = 'moi' | 'baris' | 'luffy' | 'Kitty'

const cats: Record<CatName, CatInfo> = {
  moi: { age: 2, name: ''},
  baris: { age: 3, name: ""},
  luffy: { age: 1, name: ''},
  Kitty: { age: 1, name: ''}
}

//Pick<T, Properties>
interface Todo2 {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Pick<Todo2, "title" | "completed">;

const otherTodo: TodoPreview = {
  title: '',
  completed: false
}

//Omit<T, Properties>
type TodoOmitted = Omit<Todo2, 'description'>

const todoOmited: TodoOmitted = {
  title: '',
  completed: true
}