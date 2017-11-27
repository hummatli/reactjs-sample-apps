'use strict';

//With createElement()  Function
//const element = React.createElement('p', null, 'Sattar')
//ReactDOM.render(element, document.querySelector('#app'))

//With JSX
var name = 'Sattar';

function changeName() {
    name = 'Ali';
    var element = React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            name
        ),
        React.createElement(
            'button',
            { onClick: changeName },
            'Change Name'
        )
    );
    ReactDOM.render(element, document.querySelector('#app'));
}

var element = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        name
    ),
    React.createElement(
        'button',
        { onClick: changeName },
        'Change Name'
    )
);

ReactDOM.render(element, document.querySelector('#app'));