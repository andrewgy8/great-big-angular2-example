import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import {
  Component, Input, Output,
  EventEmitter, ChangeDetectionStrategy
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/zip';


@Component({
  selector: 'text-submitter',
  templateUrl: 'text-submitter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextSubmitterComponent {


  propTypes = {
    text: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

}
