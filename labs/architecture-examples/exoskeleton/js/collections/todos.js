/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Collection
	// ---------------

	// The collection of todos is backed by *localStorage* instead of a remote
	// server.
	var Todos = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: app.Todo,

		// Save all of the todo items under the `"todos"` namespace.
		localStorage: new Backbone.LocalStorage('todos-exoskeleton'),

		// Filter down the list of all todo items that are finished.
		completed: function () {
			return this.where({completed: true});
		},

		// Filter down the list to only todo items that are still not finished.
		remaining: function () {
			return this.where({completed: false});
		},
		
		//not using underscore. create the last function. 
		//return last item on list if any. otherwise return null
		last:function(){
			return this.length > 0 ? this.at(this.length-1) : null;
		},

		// We keep the Todos in sequential order, despite being saved by unordered
		// GUID in the database. This generates the next order number for new items.
		nextOrder: function () {
			return this.length ? this.last().get('order') + 1 : 1;
		},

		// Todos are sorted by their original insertion order.
		comparator: 'order'
	});

	// Create our global collection of **Todos**.
	app.todos = new Todos();
})();
