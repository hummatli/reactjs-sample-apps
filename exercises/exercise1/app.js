'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Hobby(props) {
  return React.createElement(
    'li',
    {
      onClick: function onClick() {
        props.nameClickedHandler(props.hobby.id);
      } },
    props.hobby.name
  );
}

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    //Method bindings
    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.idPlus = _this.idPlus.bind(_this);
    _this.changeNameInput = _this.changeNameInput.bind(_this);
    _this.addNewHobby = _this.addNewHobby.bind(_this);
    _this.removeHobby = _this.removeHobby.bind(_this);

    _this.currentId = 0;

    _this.state = {
      newHobbyName: '',
      hobbyDeleted: '',
      hobbies: [{
        id: _this.idPlus(),
        name: "Play Guitar"
      }, {
        id: _this.idPlus(),
        name: "Run"
      }, {
        id: _this.idPlus(),
        name: "Read a Book"
      }]
    };
    return _this;
  }

  _createClass(App, [{
    key: 'idPlus',
    value: function idPlus() {
      this.currentId = this.currentId + 1;
      console.log(this.currentId);
      return this.currentId;
    }
  }, {
    key: 'changeNameInput',
    value: function changeNameInput(event) {
      this.setState({
        newHobbyName: event.target.value
      });
    }
  }, {
    key: 'addNewHobby',
    value: function addNewHobby() {
      var oldHobbies = this.state.hobbies;
      var newHobby = {
        id: this.idPlus(),
        name: this.state.newHobbyName
      };
      this.setState({
        hobbies: oldHobbies.concat(newHobby)
      });
    }
  }, {
    key: 'removeHobby',
    value: function removeHobby(id) {
      var hobbies = this.state.hobbies;
      for (var i = 0; i < hobbies.length; i++) {
        if (id === hobbies[i].id) {
          hobbies.splice(i, 1);
          break;
        }
      }

      this.setState({
        hobbies: hobbies,
        hobbyDeleted: React.createElement(
          'p',
          null,
          'Hobby Deleted!'
        )
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var list = this.state.hobbies.map(function (el) {
        return React.createElement(Hobby, { key: el.id, hobby: el, nameClickedHandler: _this2.removeHobby });
      });

      var classCounter = this.state.hobbies.length > 3 ? "more" : "less";

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          'Hobbies'
        ),
        React.createElement('input', {
          type: 'text',
          value: this.state.newHobbyName,
          onChange: this.changeNameInput }),
        React.createElement(
          'button',
          { onClick: this.addNewHobby },
          'New Hobby'
        ),
        React.createElement(
          'p',
          { className: classCounter },
          'Hobbies: ',
          this.state.hobbies.length
        ),
        React.createElement(
          'ul',
          null,
          list
        ),
        this.state.hobbyDeleted
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector("#app"));