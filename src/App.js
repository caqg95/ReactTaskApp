import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { todos } from './todos.json'
import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';
class App extends Component {
  constructor(){
    super();
    this.state={
     todos
    };
    this.handleAddTodo=this.handleAddTodo.bind(this)
    this.removeTodo=this.removeTodo.bind(this)
  }
  handleAddTodo(todo){
    this.setState({
      todos:[...this.state.todos,todo]
    }) 
  }
  removeTodo(index){
    if(window.confirm('Are you sure you want to delete it?')){
      this.setState({
      
        todos:this.state.todos.filter((e,i)=>{
          return i !== index
        })  
      })
    }
  }
  render(){
    const todos=this.state.todos.map((todo,i)=>{
        return(
          <div className="col-md-4"  key={i}>
            <div  className="card mt-1">
                 <div className="card-header text-center">
                     <h3>{todo.title}</h3>
                     <span className="badge badge-pill badge-danger ml-2">
                        {todo.priority}
                     </span>
                  </div>
                  <div className="card-body">
                      <p>{todo.description}</p>
                      <p><mark>{todo.responsible}</mark></p>
                  </div>
                  <div className="card-footer">
                      <button className="btn btn-danger" onClick={this.removeTodo.bind(this,i)}>Delete</button>
                  </div>
             </div>
          </div>
         
        )
    })
    return (
      <div className="App">
        <Navigation titulo="Tasks" ntareas={this.state.todos.length}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-4 text-center">
                      <TodoForm onAddTodo={this.handleAddTodo}/>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        {todos}
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }

}

export default App;
