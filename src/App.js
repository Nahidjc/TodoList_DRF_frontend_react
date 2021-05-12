import React, { Component } from 'react';
import CustomModal from './components/Modal';

const todoItems = [
  {
    "id": 1,
    "title": "Nahid",
    "description": "this is Nahid Hasan",
    "completed": false
  },
  {
    "id": 2,
    "title": "Burger Builder",
    "description": "This is Burger Builder Project",
    "completed": true
  },
  {
    "id": 3,
    "title": "Video Streaming Website",
    "description": "This is Video Streaming Website",
    "completed": true
  },
  {
    "id": 4,
    "title": "E-learning Project Using Django",
    "description": "this is E-learning Project Using Django",
    "completed": true
  }
];

class App extends Component {
  state = {
    viewCompleted: false,
    todoList: todoItems,
    modal: false,
    activeItem: {
      title: "",
      description: "",
      completed: false,
    }
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal })
  }

  handleSubmit = (item) => {
    this.toggle();

    alert("save" + JSON.stringify(item));
  };

  handleDelete = (item) => {
    alert("delete" + JSON.stringify(item));
  };

  createItem = () => {
    const item = { title: "", description: "", completed: false };

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };


  displayCompleted = status => {
    if (status) {
      return this.setState({ viewCompleted: true })
    } else {
      return this.setState({ viewCompleted: false })
    }
  }

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <button className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
          onClick={() => this.displayCompleted(true)}
        >
          Complete
        </button>
        <button
          className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
          onClick={() => this.displayCompleted(false)}
        >
          Incomplete
        </button>
      </div>
    )

  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.todoList.filter(
      (item) => item.completed === viewCompleted
    )
    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""
            }`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => this.editItem(item)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));

  }

  render() {
    return (
      <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary"
                  onClick={this.createItem}
                >
                  Add task
              </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <CustomModal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit} />
        ) : null}
      </main>
    );
  }
}

export default App;