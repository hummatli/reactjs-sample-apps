'use strict';

//With createElement()  Function
//const element = React.createElement('p', null, 'Sattar')
//ReactDOM.render(element, document.querySelector('#app'))

//With JSX
var name = 'Sattar';

function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      name
    ),
    React.createElement(
      'button',
      null,
      'Change Name'
    )
  );
}

ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));