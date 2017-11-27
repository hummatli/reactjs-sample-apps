//With createElement()  Function
//const element = React.createElement('p', null, 'Sattar')
//ReactDOM.render(element, document.querySelector('#app'))

//With JSX
const name = 'Sattar'

const element = <p>{name}</p>
ReactDOM.render(element, document.querySelector('#app'))
