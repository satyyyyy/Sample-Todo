steal(
	'jquery/model',
	'jquery/model/list')
.then(function(){

/**
 * A todo model for CRUDing todos.
 */
$.Model('Todo',{
	/**
	 * Gets JSON data from localStorage.  Any changes that 
	 * get made in cb get written back to localStorage.
	 * 
	 * This is unimportant for understanding JavaScriptMVC!
	 */
	localStore: function(cb){
		var name = 'todo-javascriptmvc',
			data = $.evalJSON( window.localStorage[name] || (window.localStorage[name] = "{}") ),
			res = cb.call(this, data);
		if(res !== false){
			window.localStorage[name] = $.toJSON(data);
		}
	},
	/**
	 * Gets todos from localStorage.
	 * 
	 *     Todo.findAll({}, success(todos))
	 */
	findAll: function(params , success){
		this.localStore(function(todos){
			instances = [];
			for(var id in todos){
				instances.push( new this( todos[id]) )
			}
			success && success(instances)
		})
	},
	/**
	 * Destroys a list of todos by id from localStorage
	 *     
	 *     Todo.destroyAll([1,2], success())
	 */
	destroyAll: function(ids, success){
		this.localStore(function(todos){
			$.each(ids, function(){
				delete todos[this]
			});
		});
		success();
	},
	/**
	 * Destroys a single todo by id
	 *     
	 *     Todo.destroyAll(1, success())
	 */
	destroy: function(id, success){

		this.destroyAll(id, success);
		this.localStore(function(todos){
			delete todos[id]
		});
				
	},
	/**
	 * Creates a todo with the provided attrs.  This allows:
	 * 
	 *     new Todo({text: 'hello'}).save( success(todo) );
	 */
	create: function(attrs, success){
		this.localStore(function(todos){
			attrs.id = attrs.id || parseInt(100000 *Math.random())
			todos[attrs.id] = attrs;
		});
		success({id : attrs.id})
	},
	/**
	 * Updates a todo by id with the provided attrs.  This allows:
	 * 
	 *     todo.update({text: 'world'}, success(todos) )
	 */
	update: function(id, attrs, success){
		this.localStore(function(todos){
			var todo = todos[id];
			$.extend(todo, attrs);
		});
		success({});
	}
	
},{

	//setter
	setTitle: function(rawValue){
		//trim
		return $.trim(rawValue);
	}

});


/**
 * Helper methods on collections of todos.  But lists can also use their model's 
 * methods.  Ex:
 * 
 *   var todos = [new Todo({id: 5}) , new Todo({id: 6})],
 *       list = new Todo.List(todos);
 *       
 *   list.destroyAll() -> calls Todo.destroyAll with [5,6].
 */
$.Model.List('Todo.List',{
	
	/**
	 * Return a new Todo.List of only complete items
	 */
	completed : function(){
		return this.grep(function(item){
			return item.completed === true;
		});
	},

	destroyAll: function(){
		for(var i=0, l=this.length; i<l; i++){
			this[i].destroy();
		}
	}
});

});