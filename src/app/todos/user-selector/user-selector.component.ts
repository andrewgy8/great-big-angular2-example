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
  selector: 'user-selector',
  templateUrl: 'user-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSelectorComponent implements OnInit {
  selectRef;
  props;

  constructor() { }

  ngOnInit() {
    const props = this.props;

    const onChange = () => {
      const integerId = parseInt(this.selectRef.value, 10);
      props.onSelect(integerId);
    };
  }

  propTypes = {
    onSelect: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
  };
}
