"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.updateAddOptions = _this.updateAddOptions.bind(_this);
        _this.onMakeDecision = _this.onMakeDecision.bind(_this);
        _this.singleDeleteOption = _this.singleDeleteOption.bind(_this);
        _this.state = {
            options: props.options
        };
        console.log("From constructor");
        return _this;
    }
    //lifecycles are available only in class based components
    // similar to ngoninit in angular


    _createClass(IndecisionApp, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            try {
                console.log("component did mount");
                //get data
                var data = JSON.parse(localStorage.getItem('options'));
                if (data) {
                    this.setState(function () {
                        return {
                            options: data
                        };
                    });
                }
            } catch (exception) {}
        }
        // after state/props value changes
        // similar to ngonupdate angular

    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            console.log("component did update");
            if (prevState.options.length != this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
                console.log('saved data');
            }
        }
        //similar to ngdestroy

    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log("component will unmount");
        }
    }, {
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            this.setState(function (prevState) {
                return { options: [] };
            });
        }
    }, {
        key: "singleDeleteOption",
        value: function singleDeleteOption(option) {
            if (this.state.options.indexOf(option) != -1) {
                this.setState(function (prevState) {
                    return {
                        options: prevState.options.filter(function (item) {
                            return item != option;
                        })
                    };
                });
            }
        }
    }, {
        key: "onMakeDecision",
        value: function onMakeDecision() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: "updateAddOptions",
        value: function updateAddOptions(option) {
            if (!option) {
                return "Enter valid option";
            }
            if (this.state.options.indexOf(option) != -1) {
                return "Already exists";
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat([option]) };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Indecision App";
            var subTitle = "Put your life in the hands of the computer";
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subTitle: subTitle }),
                React.createElement(Action, { options: this.state.options,
                    onMakeDecision: this.onMakeDecision }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    singleDeleteOption: this.singleDeleteOption
                }),
                React.createElement(AddOption, { updateAddOptions: this.updateAddOptions })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []

    //stateless functional component (these are lightweight)
};var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subTitle && React.createElement(
            "h2",
            null,
            props.subTitle
        )
    );
};
Header.defaultProps = {
    title: 'Indecision'

    //stateless functional component (these are lightweight)
};var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { disabled: !props.options.length, onClick: props.onMakeDecision },
            "What should I do?"
        )
    );
};

//stateless functional component (these are lightweight)
var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleDeleteOptions },
            "Remove All"
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, singleDeleteOption: props.singleDeleteOption, optionText: option });
        })
    );
};

//stateless functional component (these are lightweight)
var Option = function Option(props) {

    function handleClick(evt) {
        var selected = evt.target.id;
        props.singleDeleteOption(selected);
    }

    return React.createElement(
        "div",
        null,
        React.createElement(
            "span",
            null,
            props.optionText
        ),
        React.createElement(
            "button",
            { onClick: handleClick, id: props.optionText },
            "Delete"
        )
    );
};

//class based state components (since we are maintaing a state here)

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "handleSubmit",
        value: function handleSubmit(evt) {
            evt.preventDefault();
            var option = evt.target.children[0].value;
            var error = this.props.updateAddOptions(option.trim());
            if (error) {
                this.setState(function () {
                    return {
                        error: error
                    };
                });
            } else {
                this.setState(function () {
                    return {
                        error: undefined
                    };
                });
            }
            evt.target.children[0].value = null;
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.handleSubmit },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                ),
                React.createElement(
                    "p",
                    null,
                    this.state.error
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var jsx = React.createElement(IndecisionApp, null);

ReactDOM.render(jsx, document.getElementById('app'));
