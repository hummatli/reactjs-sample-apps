//With createElement()  Function
//const element = React.createElement('p', null, 'Sattar')
//ReactDOM.render(element, document.querySelector('#app'))

function Username(props) {
  return (
    <p>{props.username}</p>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.name,
      elements: [],
      message: ''
    }
  }

  changeName() {
    this.setState({
      name: 'Ali'
    })
  }

  addElement() {
    const oldElements = this.state.elements
    this.setState({
      elements: oldElements.concat(oldElements.length + 1)
    })
  }

  changeMessageInput(event) {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let updateParagraph = ''
    let nameParagraphClass = ''

    if(this.state.name !== this.props.name) {
      updateParagraph = <p>Name updated!</p>
      nameParagraphClass = 'updated'
    }

    let list = this.state.elements.map(
      el => {
        const liStyle = {
          backgroundColor: el % 2 === 0 ? 'green' : 'red'
        }
        return <li key={el} style={liStyle}>{el}</li>
      }
    )

    return (
      <div>
        <Username username="Ali"/>
        <Username username="Hasan"/>
        <p className={nameParagraphClass}>{this.state.name}</p>
        {updateParagraph}
        <button onClick={this.changeName.bind(this)}>Change Name</button>
        <button onClick={this.addElement.bind(this)}>New Element</button>
        <ul>
          {list}
        </ul>
        <input
          type="text"
          value={this.state.message}
          onChange={this.changeMessageInput.bind(this)}></input>
        <p>{this.state.message}</p>
      </div>
    )
  }
}

ReactDOM.render(<App name="Sattar"/>, document.querySelector('#app'))
