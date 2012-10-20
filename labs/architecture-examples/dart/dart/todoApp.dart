library todoApp;

import 'dart:html';

part 'TodoElement.dart';

List<TodoElement> todoElements = new List();
Element todoListElement = query('#todo-list');
Element mainElement = query('#main');
InputElement checkAllCheckboxElement = query('#toggle-all');
Element footerElement = query('#footer'); 
Element countElement = query('#todo-count');
Element clearCompletedElement = query('#clear-completed');

class Todo {
  int id;
  String title;
  bool completed;
  Todo(this.title, this.completed);
}

void main() {
  InputElement newTodoElement = query('#new-todo');

  newTodoElement.on.keyPress.add((KeyboardEvent e) {
    if(e.keyIdentifier == KeyName.ENTER) {
      String title = newTodoElement.value.trim();
      if(title != '') {
        addTodo(title);
        newTodoElement.value = '';
        updateFooterDisplay();
      }
    }
  });
  
  checkAllCheckboxElement.on.click.add((Event e) {
    InputElement target = e.srcElement;
    todoElements.forEach((TodoElement todoElement) {
      if(todoElement.todo.completed != target.checked) {
        todoElement.toggle();
      }
    });
    updateFooterDisplay();
  });

  clearCompletedElement.on.click.add((MouseEvent e) {
    List<TodoElement> newList = new List<TodoElement>();
    todoElements.forEach((TodoElement todoElement) {
      if(todoElement.todo.completed) {
        todoElement.element.remove();
      } else {
        newList.add(todoElement);
      }
    });
    todoElements = newList;
    updateFooterDisplay();
  });
  
  updateFooterDisplay();
}

void addTodo(String title, [bool completed = false]) {
  Todo todo = new Todo(title, completed);

  TodoElement todoElement = new TodoElement(todo);
  todoElements.add(todoElement);
  todoListElement.nodes.add(todoElement.createElement());
}

void updateFooterDisplay() {
  if(todoElements.length == 0) {
    checkAllCheckboxElement.style.display = 'none';
    mainElement.style.display = 'none';
    footerElement.style.display = 'none';
  } else {
    checkAllCheckboxElement.style.display = 'block';
    mainElement.style.display = 'block';
    footerElement.style.display = 'block';
  }
  updateCounts();
}

void updateCounts() {
  int complete = 0;
  todoElements.forEach((TodoElement todoElement) {
    if(todoElement.todo.completed) {
      complete++;
    }
  });
  checkAllCheckboxElement.checked = (complete == todoElements.length);
  int left = todoElements.length - complete;
  countElement.innerHTML = '${left} item${left != 1 ? 's' : ''} left';
  if(complete == 0) {
    clearCompletedElement.style.display = 'none';
  } else {
    clearCompletedElement.style.display = 'block';
    clearCompletedElement.innerHTML = 'Clear completed (${complete})';
  }
}
