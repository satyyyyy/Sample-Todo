import {Component, Directive, ElementRef, Renderer} from 'angular2/core';
import {TodoStore, Todo} from './services/store';

@Directive({
	selector: '[todo-focus]',
})
export class FocusDirective {
	constructor(private renderer: Renderer, private elementRef: ElementRef) {}
	ngAfterViewInit() {
		setTimeout(
			() => {
				this.renderer.invokeElementMethod(this.elementRef, 'focus', []);
			},
			0
		);
  }
}

@Component({
	selector: 'todo-app',
	directives: [FocusDirective],
	templateUrl: 'app/app.html'
})
export default class TodoApp {
	todoStore: TodoStore;
	newTodoText = '';

	constructor(todoStore: TodoStore) {
		this.todoStore = todoStore;
	}

	stopEditing(todo: Todo, editedTitle: string) {
		todo.title = editedTitle;
		todo.editing = false;
	}

	cancelEditingTodo(todo: Todo) {
		todo.editing = false;
	}

	updateEditingTodo(todo: Todo, editedTitle: string) {
		editedTitle = editedTitle.trim();
		todo.editing = false;

		if (editedTitle.length === 0) {
			return this.todoStore.remove(todo);
		}

		todo.title = editedTitle;
	}

	editTodo(todo: Todo) {
		todo.editing = true;
	}

	removeCompleted() {
		this.todoStore.removeCompleted();
	}

	toggleCompletion(todo: Todo) {
		this.todoStore.toggleCompletion(todo);
	}

	remove(todo: Todo){
		this.todoStore.remove(todo);
	}

	addTodo() {
		if (this.newTodoText.trim().length) {
			this.todoStore.add(this.newTodoText);
			this.newTodoText = '';
		}
	}
}
