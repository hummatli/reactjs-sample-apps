'use strict';

//With createElement()  Function
//const element = React.createElement('p', null, 'Sattar')
//ReactDOM.render(element, document.querySelector('#app'))

//With JSX
var name = 'Sattar';

var element = React.createElement(
  'p',
  null,
  name
);
ReactDOM.render(element, document.querySelector('#app'));