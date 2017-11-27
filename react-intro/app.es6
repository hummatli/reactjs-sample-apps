//With createElement()  Function
//const element = React.createElement('p', null, 'Sattar')
//ReactDOM.render(element, document.querySelector('#app'))

//With JSX
let name = 'Sattar'

function changeName() {
  name = 'Ali'
  const element = (<div>
      <p>{name}</p>
      <button onClick={changeName}>Change Name</button>
  </div>)
  ReactDOM.render(element, document.querySelector('#app'))
}

const element = (<div>
    <p>{name}</p>
    <button onClick={changeName}>Change Name</button>
</div>)

ReactDOM.render(element, document.querySelector('#app'))
