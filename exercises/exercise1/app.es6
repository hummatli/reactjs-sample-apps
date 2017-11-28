function Hobby(props) {
  return (
    <li
      onClick={props.nameClickedHandler}
      >{props.hobby.name}</li>
  )
}

class App extends React.Component {

  constructor(props) {
    super(props)

    //Method bindings
    this.idPlus = this.idPlus.bind(this)
    this.changeNameInput = this.changeNameInput.bind(this)
    this.addNewHobby = this.addNewHobby.bind(this)
    this.removeHobby = this.removeHobby.bind(this)

    this.currentId = 0

    this.state = {
      newHobbyName: '',
      hobbyDeleted: '',
      hobbies: [
        {
          id: this.idPlus(),
          name: "Play Guitar"
        },
        {
          id: this.idPlus(),
          name: "Run"
        },
        {
          id: this.idPlus(),
          name: "Read a Book"
        }
      ]
    }
  }

  idPlus() {
    this.currentId = this.currentId + 1
    console.log(this.currentId)
    return this.currentId
  }

  changeNameInput(event) {
    this.setState({
      newHobbyName: event.target.value
    })
  }

  addNewHobby() {
    const oldHobbies = this.state.hobbies
    let newHobby = {
      id: this.idPlus(),
      name: this.state.newHobbyName
    }
    this.setState({
      hobbies: oldHobbies.concat(newHobby)
    })
  }

  removeHobby(id) {
    let hobbies = this.state.hobbies
    for(var i = 0; i < hobbies.length; i++) {
      if(id === hobbies[i].id) {
        hobbies.splice(i, 1)
        break
      }
    }

    this.setState({
      hobbies: hobbies,
      hobbyDeleted: <p>Hobby Deleted!</p>
    })
  }

  render() {
    let list = this.state.hobbies.map(
      el => {
        return <Hobby key={el.id} hobby={el} nameClickedHandler={() => {this.removeHobby(el.id)}}/>
      }
    )

    let classCounter = this.state.hobbies.length > 3 ? "more" : "less"

    return (
      <div>
        <h3>Hobbies</h3>
        <input
          type="text"
          value={this.state.newHobbyName}
          onChange={this.changeNameInput}></input>
        <button onClick={this.addNewHobby}>New Hobby</button>
        <p className={classCounter}>Hobbies: {this.state.hobbies.length}</p>
        <ul>
          {list}
        </ul>
        {this.state.hobbyDeleted}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#app"))
