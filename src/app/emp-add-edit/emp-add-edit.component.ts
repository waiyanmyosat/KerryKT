import { Component, Inject, OnInit , ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { EmployeeService } from '../services/employee.service';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';


@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],
})
export class EmpAddEditComponent implements OnInit {
  empForm: FormGroup;
  myForm!: FormGroup;

  sliderValue: number = 0;

  onSliderChange(event: Event) {
    const slider = event.target as HTMLInputElement;
    this.sliderValue = parseInt(slider.value);
  
    if (this.sliderValue <= 40) {
      this.volume.value = 'Mini'; // Update the value of the MatSelect to '2'
    }else if(this.sliderValue <= 60){
      this.volume.value = 'S';
    }else if (this.sliderValue <= 75){
      this.volume.value = 'S+';
    }else if (this.sliderValue <= 90){
      this.volume.value = 'M';
    }else if (this.sliderValue <= 105){
      this.volume.value = 'M+';
    }else if (this.sliderValue <= 120){
      this.volume.value = 'L';
    }else if (this.sliderValue <= 150){
      this.volume.value = 'XL';
    }else if (this.sliderValue <= 280){
      this.volume.value = 'XXL';
    }
  }

  @ViewChild('volume', { static: true }) volume!: MatSelect;
  @ViewChild('weight', { static: true }) weight!: ElementRef<HTMLInputElement>;


  productCondition() {
    const volumeValue = this.volume.value;
    const weightValue = parseFloat(this.weight.nativeElement.value);
    const price = `source${this.var_4}`;
    const insurance = `source${this.var_3}`;

    if (weightValue <= 0.5 && volumeValue === 'Envelope') {
      this.volume.value = 'Envelope || ' + weightValue + 'kg';
      this.empForm.get(price)?.setValue('33');
      this.empForm.get(price)?.patchValue('33');
      this.weight.nativeElement.value = '';
      this.empForm.get(insurance)?.setValue('660B');
      this.empForm.get(insurance)?.patchValue('660B');
    } else if (weightValue <= 0.5 && volumeValue === 'Bag Lite') {
      this.volume.value = 'Bag Lite || ' + weightValue + 'kg';
      this.empForm.get(price)?.setValue('27');
      this.empForm.get(price)?.patchValue('27');
      this.weight.nativeElement.value = '';
      this.empForm.get(insurance)?.setValue('540B');
      this.empForm.get(insurance)?.patchValue('540B');
    } else if (weightValue <= 2 && volumeValue === 'Bag A/B') {
      this.volume.value = 'Bag A/B || ' + weightValue + 'kg';
      this.empForm.get(price)?.setValue('30');
      this.empForm.get(price)?.patchValue('30');
      this.weight.nativeElement.value = '';
      this.empForm.get(insurance)?.setValue('600B');
      this.empForm.get(insurance)?.patchValue('600B');
    } else if (weightValue <= 7 && volumeValue === 'Bag C') {
      this.volume.value = 'Bag C || ' + weightValue + 'kg';
      this.empForm.get(price)?.setValue('35');
      this.empForm.get(price)?.patchValue('35');
      this.weight.nativeElement.value = '';
      this.empForm.get(insurance)?.setValue('700B');
      this.empForm.get(insurance)?.patchValue('700B');
    } else if (weightValue <= 2 && volumeValue === 'Mini') {
      this.volume.value = 'Mini || ' + weightValue + 'kg';
      this.empForm.get(price)?.setValue('30');
      this.empForm.get(price)?.patchValue('30');
      this.weight.nativeElement.value = '';
      this.empForm.get(insurance)?.setValue('600B');
      this.empForm.get(insurance)?.patchValue('600B');
    } else if (weightValue <= 7 && volumeValue === 'S') {
      this.volume.value = 'S || ' + weightValue + 'kg';
      this.empForm.get(price)?.setValue('60');
      this.empForm.get(price)?.patchValue('60');
      this.weight.nativeElement.value = '';
      this.empForm.get(insurance)?.setValue('1200B');
      this.empForm.get(insurance)?.patchValue('1200B');
    } else if (weightValue <= 7 && volumeValue === 'S+') {
      this.volume.value = 'S+ || ' + weightValue + 'kg';
      this.empForm.get(price)?.setValue('65');
      this.empForm.get(price)?.patchValue('65');
      this.weight.nativeElement.value = '';
      this.empForm.get(insurance)?.setValue('1300B');
      this.empForm.get(insurance)?.patchValue('1300B');
    } else if (weightValue <= 10 && volumeValue === 'M') {
      this.volume.value = 'M || ' + weightValue + 'kg';
      this.empForm.get(price)?.setValue('165');
      this.empForm.get(price)?.patchValue('165');
      this.weight.nativeElement.value = '';
      this.empForm.get(insurance)?.setValue('3300B');
      this.empForm.get(insurance)?.patchValue('3300B');
    } else if (weightValue <= 15 && volumeValue === 'M+') {
      this.volume.value = 'M+ || ' + weightValue + 'kg';
      this.empForm.get(price)?.setValue('185');
      this.empForm.get(price)?.patchValue('185');
      this.weight.nativeElement.value = '';
      this.empForm.get(insurance)?.setValue('3700B');
      this.empForm.get(insurance)?.patchValue('3700B');
    } else if (weightValue <= 15 && volumeValue === 'L') {
      this.volume.value = 'L || ' + weightValue + 'kg';
      this.empForm.get(price)?.setValue('200');
      this.empForm.get(price)?.patchValue('200');
      this.weight.nativeElement.value = '';
      this.empForm.get(insurance)?.setValue('4000B');
      this.empForm.get(insurance)?.patchValue('4000B');
    } else if (weightValue <= 20 && volumeValue === 'XL') {
      this.volume.value = 'XL || ' + weightValue + 'kg';
      this.empForm.get(price)?.setValue('300');
      this.empForm.get(price)?.patchValue('300');
      this.weight.nativeElement.value = '';
      this.empForm.get(insurance)?.setValue('6000B');
      this.empForm.get(insurance)?.patchValue('6000B');
    } else if (weightValue <= 30 && volumeValue === 'XXL') {
      this.volume.value = 'XXL || ' + weightValue + 'kg';
      this.empForm.get(price)?.setValue('400');
      this.empForm.get(price)?.patchValue('400');
      this.weight.nativeElement.value = '';
      this.empForm.get(insurance)?.setValue('8000B');
      this.empForm.get(insurance)?.patchValue('8000B');;
    }else{
      this.volume.value = '';
      this.weight.nativeElement.value = '';
    }
}

  
  addInputs() {
    for (let i = 0; i < 5; i++) {
      const nameControl = this.formBuilder.control('');
      this.namesFormArray.push(nameControl);
    }
  }

  clickCount = 0;

  threeFuntion() {
    this.clickCount++;

    if (this.clickCount === 1) {
      this.addInputs();
      this.syn();
      this.generateNumbers();
    } else if (this.clickCount === 2) {
      this.generateNumbers();
      setTimeout(() => {
        this.syn();
      }, 10);
      this.addInputs();
    }else {
      setTimeout(() => {
        this.syn();
      }, 10);
      this.generateNumbers();
      this.addInputs();
    }
  }

calculateTotal(): void {
    const startingIndex = 4; // Starting index for the control names
    const numberOfControls = 100; // Number of form controls to include in the calculation
    const controlNames = [];
  
    for (let i = 0; i < numberOfControls; i++) {
      const controlName = 'name' + (startingIndex + i * 5);
      controlNames.push(controlName);
    }
  
    let total = 0; // Initialize total variable
  
    for (const controlName of controlNames) {
      const controlValue = this.empForm.get(controlName)?.value;
      const parsedValue = parseFloat(controlValue);
  
      if (!isNaN(parsedValue)) {
        total += parsedValue;
      }
    }
    this.empForm.get('total')?.setValue(total); 
  }

  startNonStopFunction() {
    setInterval(() => {
      this.calculateTotal();
    }, 10);
  }

  var_1: number = 0;
  var_2: number = 0;
  var_3: number = 0;
  var_4: number = 0;
  var_5: number = 0;
  clickCounter: number = 0;

 generateNumbers() {
    this.clickCounter++;
    const baseNumber = (this.clickCounter - 1) * 5;
    this.var_1 = baseNumber + 1;
    this.var_2 = baseNumber + 2;
    this.var_3 = baseNumber + 3;
    this.var_4 = baseNumber + 4;
    this.var_5 = baseNumber + 5;
  }
  syn() {
    for (let i = 0; i < 100; i++) {
      let sourceControlName = 'source' + (i+1);
      let inputControlName = 'name' + (i+1);
      
      const sourceControl = new FormControl('');
      const inputControl = new FormControl('');
    
      this.empForm.addControl(sourceControlName, sourceControl);
      this.empForm.addControl(inputControlName, inputControl);
    
      this.empForm.controls[sourceControlName].valueChanges.subscribe(value => {
        this.empForm.controls[inputControlName].setValue(value, { emitEvent: false });
      });
      
      this.empForm.controls[inputControlName].valueChanges.subscribe(value => {
        this.empForm.controls[sourceControlName].setValue(value, { emitEvent: false });
      });
    }
  }
  
  
  education: string[] = [
    'Envelope',
    'Bag Lite',
    'Bag A/B',
    'Bag C',
    'Mini',
    'S',
    'S+',
    'M',
    'M+',
    'L',
    'XL',
    'XXL',
  ];

  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService,
    private formBuilder: FormBuilder
  ) {
    this.empForm = this._fb.group({
      currentTime: [''] ,
      customerName: '',
      customerPhone: '',
      a:'',
      name1: '',
      name2: '',
      name3: '',
      name4: '',
      name5: '',
      b: '',
      name6: '',
      name7: '',
      name8: '',
      name9: '',
      name10:'',
      c: '',
      name11: '',
      name12: '',
      name13: '',
      name14: '',
      name15:'',
      d: '',
      name16: '',
      name17: '',
      name18: '',
      name19: '',
      name20:'',
      e: '',
      name21: '',
      name22: '',
      name23: '',
      name24: '',
      name25:'',
      f: '',
      name26: '',
      name27: '',
      name28: '',
      name29: '',
      name30:'',
      g: '',
      name31: '',
      name32: '',
      name33: '',
      name34: '',
      name35:'',
      h: '',
      name36: '',
      name37: '',
      name38: '',
      name39: '',
      name40:'',
      i: '',
      name41: '',
      name42: '',
      name43: '',
      name44: '',
      name45:'',
      j: '',
      name46: '',
      name47: '',
      name48: '',
      name49: '',
      name50:'',
      k: '',
      name51: '',
      name52: '',
      name53: '',
      name54: '',
      name55:'',
      l: '',
      name56: '',
      name57: '',
      name58: '',
      name59: '',
      name60:'',
      m: '',
      name61: '',
      name62: '',
      name63: '',
      name64: '',
      name65:'',
      n: '',
      name66: '',
      name67: '',
      name68: '',
      name69: '',
      name70:'',
      o: '',
      name71: '',
      name72: '',
      name73: '',
      name74: '',
      name75:'',
      p: '',
      name76: '',
      name77: '',
      name78: '',
      name79: '',
      name80:'',
      q: '',
      name81: '',
      name82: '',
      name83: '',
      name84: '',
      name85:'',
      r: '',
      name86: '',
      name87: '',
      name88: '',
      name89: '',
      name90:'',
      s: '',
      name91: '',
      name92: '',
      name93: '',
      name94: '',
      name95:'',
      t: '',
      name96: '',
      name97: '',
      name98: '',
      name99: '',
      name100:'',
      u:   '',
      total: 0,
      action:'',
    });
  }

  get namesFormArray() {
    return this.myForm.get('names') as FormArray;
  }


  updateClassNumbers() {
    const controls = this.namesFormArray.controls;
    for (let i = 0; i < controls.length; i++) {
      controls[i].setValue(this.getClassNumber(i));
    }
  }
  
  getClassNumber(index: number) {
    return (index % 5) + 1;
  }
  
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
    this.myForm = this.formBuilder.group({
      names: this.formBuilder.array([])
    });
    setInterval(() => {
      this.updateClassNumbers();
    }, 0); 
    this.time();
    window.setInterval(() => {
      this.time();
    }, 1000);
    this.startNonStopFunction();
let s_customerName = 's_customerName';
let s_customerPhone = 's_customerPhone';
let customerName = 'customerName';
let customerPhone = 'customerPhone';

const sourceControl = new FormControl(['']);
const inputControl = new FormControl(['']);
const sourceControlPhone = new FormControl(['']);
const inputControlPhone = new FormControl(['']);

this.empForm.addControl(s_customerName, sourceControl);
this.empForm.addControl(customerName, inputControl);

// Two-way synchronization for customerName
this.empForm.controls[s_customerName].valueChanges.subscribe(value => {
  this.empForm.controls[customerName].setValue(value, { emitEvent: false });
});

this.empForm.controls[customerName].valueChanges.subscribe(value => {
  this.empForm.controls[s_customerName].setValue(value, { emitEvent: false });
});

this.empForm.addControl(s_customerPhone, sourceControlPhone);
this.empForm.addControl(customerPhone, inputControlPhone);

// Two-way synchronization for customerPhone
this.empForm.controls[s_customerPhone].valueChanges.subscribe(value => {
  this.empForm.controls[customerPhone].setValue(value, { emitEvent: false });
});

this.empForm.controls[customerPhone].valueChanges.subscribe(value => {
  this.empForm.controls[s_customerPhone].setValue(value, { emitEvent: false });
});



}
  time() {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric',
      hour12: true,
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };

    this.empForm.get('currentTime')?.setValue(currentDate.toLocaleString('en-US', options));
  }

  onFormSubmit() {
    // Get the form value
    const formValue = this.empForm.value;
  
    // Delete the fields you want to exclude
    delete formValue.s_customerName;
    delete formValue.s_customerPhone;
  
    for (let i = 1; i <= 100; i++) {
      delete formValue['source' + i];
    }
  
    for (let key in formValue) {
      if (formValue.hasOwnProperty(key) && formValue[key] === '') {
        delete formValue[key];
      }
    }
  
    if (this.data) {
      this._empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('Employee detail updated!');
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    } else {
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('Employee added successfully');
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
  }
}  
   

   
