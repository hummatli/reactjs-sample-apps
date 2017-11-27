//With createElement()  Function
//const element = React.createElement('p', null, 'Sattar')
//ReactDOM.render(element, document.querySelector('#app'))

//With JSX
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.name
    }
  }

  changeName() {
    this.setState({
      name: 'Ali'
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <button onClick={this.changeName.bind(this)}>Change Name</button>
      </div>
    )
  }
}

ReactDOM.render(<App name="Sattar"/>, document.querySelector('#app'))
