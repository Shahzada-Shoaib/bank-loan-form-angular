import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiResponseModel, Application, Loan } from '../../model/application.model';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css'
})
export class LoanApplicationComponent {

  application: Application = new Application();
  loan: Loan = new Loan();

  masterSrv = inject(MasterService);
  // constructor(private masterSrv: MasterService) { }


  addLoan() {
    // const strObj = JSON.stringify(this.loan);
    // const newObj = JSON.parse(strObj);
    const newObj = { ...this.loan };
    this.application.Loans.unshift(newObj);

    // this.application.Loans.unshift(this.loan);


  }

  onClick(application : Application) {

    application.dateApplied = application.dateOfBirth;

    debugger;

   
    this.masterSrv.addNewApplication(application).subscribe((Res) => {
     
      if (Res) {
        alert("form is submitted")
      } else {
        alert(Res)
      }
    }

    )
  }

 



}
