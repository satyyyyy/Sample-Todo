// Generated by CoffeeScript 1.10.0
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.TodoCollection = (function(superClass) {
    extend(TodoCollection, superClass);

    function TodoCollection() {
      return TodoCollection.__super__.constructor.apply(this, arguments);
    }

    TodoCollection.prototype.localStorage = new Store('todos-knockback');

    return TodoCollection;

  })(Backbone.Collection);

}).call(this);
