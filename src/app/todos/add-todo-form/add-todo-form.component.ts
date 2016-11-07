import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import {
  Component, Input, Output, EventEmitter, OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Claim } from '../../core/store/claim/claim.model';
import { Rebuttal } from '../../core/store/rebuttal/rebuttal.model';

@Component({
  selector: 'add-todo-form',
  templateUrl: 'add-todo-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoFormComponent extends PureComponent implements OnInit {
  props;
  textRef;
  tagsRef;

  ngOnInit() {
    const props = this.props;
  }

  onSubmit() {
    this.props.onSubmit({
      text: this.textRef.value,
      tags: this.tagsRef.value,
    });
  };


  propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

}
