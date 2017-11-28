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
    let updateParagraph = ''
    if(this.state.name !== this.props.name) {
      updateParagraph = <p>Name updated!</p>
    }

    return (
      <div>
        <p>{this.state.name}</p>
        {updateParagraph}
        <button onClick={this.changeName.bind(this)}>Change Name</button>
      </div>
    )
  }
}

ReactDOM.render(<App name="Sattar"/>, document.querySelector('#app'))
