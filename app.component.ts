
import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular11crud';
  userData : any = [];
  isEdit=false;
  userObj={
    name:'',
    mobile:'',
    email:'',
    password:'',
    id:''

  }
  constructor(private commonService: CommonService){
    this.getUser();
  }

  ngOnInit(){
    this.getUser();
  }
  addUser(formObj: any){

    console.log(formObj);
    this.commonService.createUser(formObj).subscribe((Response)=>{
      console.log("user hab been added");
      alert("done");
      this.getUser();
    })

  }
  getUser(){
    this.commonService.getAllUser().subscribe(res=>{
      this.userData=res;
      console.log(this.userData);
    })
  }

  editUser(row: any){
    alert("update info");
    this.isEdit = true;
    this.userObj = row;
  }

  deleteUser(row: any){
    alert("are you sure to delete this info")
    this.commonService.deleteUser(row).subscribe(()=>{
      this.getUser(); 
    })
  }

  updateUser(){
    this.isEdit = !this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(()=>{
      this.getUser();
    })
  }


}
