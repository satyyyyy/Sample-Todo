'use strict';

/*
 * module dependence
 */

var route = require('util.route'),
    active = 'selected';


function clear(btns) {
    for (var i = 0, len = btns.length; i < len; i++) {
        btns[i].className = '';
    }
}

function show(element, todos) {
    if (!todos.length) {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}

function footer(str, scope, element) {
    show(element, scope.todos);
    scope.onchange('todos', function (todos) {
        show(element, todos);
    });
    route
    .when('#/', function () {
        var btns = element.querySelectorAll('#filters a');
        clear(btns);
        btns[0].className = active;
    })
    .when('#/active', function () {
        var btns = element.querySelectorAll('#filters a');
        clear(btns);
        btns[1].className = active;
    })
    .when('#/completed', function () {
        var btns = element.querySelectorAll('#filters a');
        clear(btns);
        btns[2].className = active;
    });
    route.nav();
}


exports = module.exports = footer;
