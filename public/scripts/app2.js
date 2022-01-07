'use strict';

var show = true;
var showHideDetails = function showHideDetails() {
    show = !show;
    renderApp();
};

function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: showHideDetails },
            show ? 'Hide Details' : 'Show Details'
        ),
        show && React.createElement(
            'p',
            null,
            "Hey some details"
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
}

renderApp();
