//With createElement()  Function
//const element = React.createElement('p', null, 'Sattar')
//ReactDOM.render(element, document.querySelector('#app'))

//With JSX
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.name,
      elements: []
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

  render() {
    let updateParagraph = ''
    if(this.state.name !== this.props.name) {
      updateParagraph = <p>Name updated!</p>
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
        <p>{this.state.name}</p>
        {updateParagraph}
        <button onClick={this.changeName.bind(this)}>Change Name</button>
        <button onClick={this.addElement.bind(this)}>New Element</button>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App name="Sattar"/>, document.querySelector('#app'))
