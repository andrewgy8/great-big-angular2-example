import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import {
  Component, Input, Output, EventEmitter, OnInit,
  ChangeDetectionStrategy
} from '@angular/core';


@Component({
  selector: 'todo-item',
  templateUrl: 'todo-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {
  props;

  ngOnInit() {

    let listItemClasses = 'list-group-item';

    if (this.props.done) listItemClasses += ' disabled';

  }

  propTypes = {
    children: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    done: PropTypes.bool.isRequired,
    onAddTag: PropTypes.func.isRequired,
    onRemoveTag: PropTypes.func.isRequired,
    onMarkDone: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  };
}
