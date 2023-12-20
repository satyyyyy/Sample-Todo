import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

import template from './todo-item.template.html';

@Component({
	selector: 'todo-item',
	template: template
})
export class TodoItemComponent extends OnInit {
	@Input() todo;

	@Output() itemModified = new EventEmitter();

	@Output() itemRemoved = new EventEmitter();

	editing = false;

	daysLeft = ""

	dueCompleted = false

	cancelEditing() {
		this.editing = false;
	}

	stopEditing(editedTitle) {
		this.todo.setTitle(editedTitle.value);
		this.editing = false;

		if (this.todo.title.length === 0) {
			this.remove();
		} else {
			this.update();
		}
	}

	edit() {
		this.editing = true;
	}

	toggleCompletion() {
		this.todo.completed = !this.todo.completed;
		this.update();
	}

	remove() {
		this.itemRemoved.next(this.todo.uid);
	}

	update() {
		this.itemModified.next(this.todo.uid);
	}
	checkDaysLeft(){
		let daysLeft = new Date(this.todo.due.toString()).getDate() - new Date().getDate();
		
		if(Number(daysLeft) > 1){
			this.daysLeft = daysLeft + " days left"
		}
		else if(Number(daysLeft) === 0){
			
			let hourLeft = 24 - new Date().getHours() ;
			hourLeft < 10 ? this.daysLeft = hourLeft + " hour left" : this.daysLeft = hourLeft + " hours left"	
		}
		else {
			this.daysLeft = daysLeft + " day left"
		}
		
		
	}
	checkTimeLeft(){
		let timeLeft = new Date(this.todo.toString()).getTime() - new Date().getTime();

		if(timeLeft<= 0 ){
			this.dueCompleted = true
		}else {
			this.dueCompleted = false 
		}
	}
	ngOnInit(){
		this.checkDaysLeft();
		this.checkTimeLeft()
		
	}
}
