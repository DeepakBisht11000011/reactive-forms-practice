import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HexGenService } from '../service/hex-gen.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit, OnChanges {
  constructor(_hexGenService: HexGenService) {
    // this.hexGenService = _hexGenService;
  }
  hexForm: any;
  handleGenerate = () => {
    console.log(this.hexForm);
  };
  handleVerifierGenerate = () => {
    console.log(this.hexForm);
    // this.hexForm.
    this.hexForm.value.code_verifier = '';
    this.hexForm.value.code_challenge = '';
    
  };
  ngOnInit(): void {
    this.hexForm = new FormGroup({
      code_verifier: new FormControl(),
      code_challenge: new FormControl(),
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    for (let change in changes) {
      console.log('hello');
    }
  }
}
