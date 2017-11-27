//With createElement()  Function
//const element = React.createElement('p', null, 'Sattar')
//ReactDOM.render(element, document.querySelector('#app'))

//With JSX
class App extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <button>Change Name</button>
      </div>
    )
  }
}

ReactDOM.render(<App name="Sattar"/>, document.querySelector('#app'))
