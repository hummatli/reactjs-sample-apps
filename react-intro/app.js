'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//With createElement()  Function
//const element = React.createElement('p', null, 'Sattar')
//ReactDOM.render(element, document.querySelector('#app'))

//With JSX
var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      name: props.name,
      elements: [],
      message: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: 'changeName',
    value: function changeName() {
      this.setState({
        name: 'Ali'
      });
    }
  }, {
    key: 'addElement',
    value: function addElement() {
      var oldElements = this.state.elements;
      this.setState({
        elements: oldElements.concat(oldElements.length + 1)
      });
    }
  }, {
    key: 'changeMessageInput',
    value: function changeMessageInput(event) {
      this.setState({
        message: event.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var updateParagraph = '';
      var nameParagraphClass = '';

      if (this.state.name !== this.props.name) {
        updateParagraph = React.createElement(
          'p',
          null,
          'Name updated!'
        );
        nameParagraphClass = 'updated';
      }

      var list = this.state.elements.map(function (el) {
        var liStyle = {
          backgroundColor: el % 2 === 0 ? 'green' : 'red'
        };
        return React.createElement(
          'li',
          { key: el, style: liStyle },
          el
        );
      });

      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { className: nameParagraphClass },
          this.state.name
        ),
        updateParagraph,
        React.createElement(
          'button',
          { onClick: this.changeName.bind(this) },
          'Change Name'
        ),
        React.createElement(
          'button',
          { onClick: this.addElement.bind(this) },
          'New Element'
        ),
        React.createElement(
          'ul',
          null,
          list
        ),
        React.createElement('input', {
          type: 'text',
          value: this.state.message,
          onChange: this.changeMessageInput.bind(this) }),
        React.createElement(
          'p',
          null,
          this.state.message
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, { name: 'Sattar' }), document.querySelector('#app'));