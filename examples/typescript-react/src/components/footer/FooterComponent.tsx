import * as classNames from 'classnames';
import * as React from 'react';
import { Utils } from '../../utils';
import { IFooterItem, ITodoFooterProps } from '../../model';

export const FooterComponent = ({
	completedCount,
	nowShowing,
	onClearCompleted,
	count,
	items
}: ITodoFooterProps): JSX.Element => {
	const activeTodoWord = Utils.pluralize(count, 'item');

	const renderItem = (item: IFooterItem): JSX.Element => {
		return (
			<li>
				<a
					href={item.href}
					className={classNames({ selected: nowShowing === item.type })}
				>
					{item.label}
				</a>
			</li>
		);
	};

	return (
		<footer className='footer'>
			<span className='todo-count'>
				<strong>{count}</strong> {activeTodoWord} left
			</span>
			<ul className='filters'>
				{items.map((item: IFooterItem) => renderItem(item))}
			</ul>
			{!!completedCount && (
				<button className='clear-completed' onClick={onClearCompleted}>
					Clear completed
				</button>
			)}
		</footer>
	);
};
