(function () {
	'use strict';

	Polymer({
		is: 'td-model',
		properties: {
			items: {
				type: Array,
				notify: true
			},
			filter: String
		},
		initializeDefaultTodos: function () {
			this.items = [];
		},
		newItem: function (title) {
			title = String(title).trim();

			if (!title) {
				return;
			}

			this.push('items', {
				title: title,
				completed: false
			});
		},
		getCompletedCount: function (items) {
			return items === null ? 0 : items.filter(this.filters.completed).length
		},
		getActiveCount: function (items) {
			return items.length - this.getCompletedCount(items);
		},
		areAllCompleted: function (items) {
			return this.getCompletedCount(items) && !this.getActiveCount(items) ? true : false;
		},
		matchesFilter: function (item, filter) {
			var fn = this.filters[filter];
			return this.filtered = fn ? fn(item) : true;
		},
		destroyItem: function (item) {
			var i = this.items.indexOf(item);

			i !== -1 && this.splice('items', i, 1);
		},
		clearCompletedItems: function () {
			this.items = this.items.filter(this.filters.active);
		},
		setItemsCompleted: function (completed) {
			// Since we are mutating elements in an array here
			// and we want everyone to know about it we must go through
			// the polymer internal `splice` api. The fix that comes to my mind here
			// would be to use a hash or set to represent this structure so that the mutations
			// would happening on an  object with real key value pairs instead of an object
			// nested inside of an array
			// Polymer array mutation docs: https://www.polymer-project.org/1.0/docs/devguide/properties.html#array-mutation
			this.items.forEach(function (item, i) {
				if (this.filter) {
					if (this.filters[this.filter](item)) {
						this.splice('items', i, 1, {title: item.title, completed: completed});
					}
				} else {
					this.splice('items', i, 1, {title: item.title, completed: completed});
				}
			}, this);
		},
		filters: {
			active: function (item) {
				return !item.completed;
			},
			completed: function (item) {
				return item.completed;
			}
		}
	});
})();

