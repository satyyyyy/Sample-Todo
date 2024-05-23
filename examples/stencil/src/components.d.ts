/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { TodoItemModel, TodoModel } from "./components/todo/todo-model";
export namespace Components {
    interface TodoApp {
        "model": TodoModel;
    }
    interface TodoFooter {
        "completedCount": number;
        "count": number;
        "nowShowing": string;
    }
    interface TodoItem {
        "editing": boolean;
        "todo": TodoItemModel;
    }
}
declare global {
    interface HTMLTodoAppElement extends Components.TodoApp, HTMLStencilElement {
    }
    var HTMLTodoAppElement: {
        prototype: HTMLTodoAppElement;
        new (): HTMLTodoAppElement;
    };
    interface HTMLTodoFooterElement extends Components.TodoFooter, HTMLStencilElement {
    }
    var HTMLTodoFooterElement: {
        prototype: HTMLTodoFooterElement;
        new (): HTMLTodoFooterElement;
    };
    interface HTMLTodoItemElement extends Components.TodoItem, HTMLStencilElement {
    }
    var HTMLTodoItemElement: {
        prototype: HTMLTodoItemElement;
        new (): HTMLTodoItemElement;
    };
    interface HTMLElementTagNameMap {
        "todo-app": HTMLTodoAppElement;
        "todo-footer": HTMLTodoFooterElement;
        "todo-item": HTMLTodoItemElement;
    }
}
declare namespace LocalJSX {
    interface TodoApp {
        "model"?: TodoModel;
    }
    interface TodoFooter {
        "completedCount"?: number;
        "count"?: number;
        "nowShowing"?: string;
        "onClearCompleted"?: (event: CustomEvent<void>) => void;
    }
    interface TodoItem {
        "editing"?: boolean;
        "onCancel"?: (event: CustomEvent<void>) => void;
        "onDestroy"?: (event: CustomEvent<string>) => void;
        "onEdit"?: (event: CustomEvent<string>) => void;
        "onSave"?: (event: CustomEvent<{todoId: string, text: string}>) => void;
        "onToggle"?: (event: CustomEvent<string>) => void;
        "todo"?: TodoItemModel;
    }
    interface IntrinsicElements {
        "todo-app": TodoApp;
        "todo-footer": TodoFooter;
        "todo-item": TodoItem;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "todo-app": LocalJSX.TodoApp & JSXBase.HTMLAttributes<HTMLTodoAppElement>;
            "todo-footer": LocalJSX.TodoFooter & JSXBase.HTMLAttributes<HTMLTodoFooterElement>;
            "todo-item": LocalJSX.TodoItem & JSXBase.HTMLAttributes<HTMLTodoItemElement>;
        }
    }
}
