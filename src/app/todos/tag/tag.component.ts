import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import {
  Component, Input, Output,
  EventEmitter, ChangeDetectionStrategy
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/zip';


@Component({
  selector: 'tag',
  templateUrl: 'tag.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent {
  propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

}
