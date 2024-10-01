import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetailsService } from '../details.service';
declare var $:any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userForm: any;
  userList:any;
  uId : any;
  constructor(public fb: FormBuilder,private d:DetailsService) {
      this.userForm = this.fb.group({
        Name:["",Validators.required],
        Email:["",Validators.required],
        Mobile:["",Validators.required],
        Age:["",Validators.required],
        id : [""]
      })

   }

  ngOnInit(): void {
    this.getAllUsers();
  }
  SubmitForm(){
    var type= this.uId == undefined ? "Add" : "Update";
    if(this.userForm.value.Name==undefined || this.userForm.value.Email==undefined || this.userForm.value.Mobile==undefined || this.userForm.value.Age==undefined){
      alert("Please fill all the fields");
      return;
    }
    console.log(this.userForm.value.id);
    this.d.AddUpdateUser(this.userForm.value,type).subscribe(data=>{
      if(type=="Add"){
      alert("Added");
      }
      else{
      alert("Updated");
      }
      this.userForm.reset();
      this.getAllUsers();
      console.log(data);
    })
  }
  getAllUsers(){
    this.d.getAllusers().subscribe(data=>{
      console.log(data);
      this.userList=data;
    })
  }
  deleteById(id:any){
    this.d.deleteById(id).subscribe(data=>{
      alert("User Deleted Successfully");
      this.getAllUsers();
    })
  }
  getUserById(id:any){
    this.uId = id;
    this.d.getUserById(id).subscribe(data=>{
      console.log(data);
      $("#home").addClass("show");
      $("#home").addClass("active");
      $("#profile").removeClass("show");
      $("#profile").removeClass("active");
      this.userForm.patchValue({
        Name:data.Name,
        Email:data.Email,
        Mobile:data.Mobile,
        Age:data.Age,
        id : id, 
        
      })
      
    })

  }

}
