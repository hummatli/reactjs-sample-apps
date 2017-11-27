//With createElement()  Function
//const element = React.createElement('p', null, 'Sattar')
//ReactDOM.render(element, document.querySelector('#app'))

//With JSX
let name = 'Sattar'

function App() {
  return (
    <div>
      <p>{name}</p>
      <button>Change Name</button>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
