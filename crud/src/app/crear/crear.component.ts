import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CruService } from '../cru.service';
import { User } from '../models/user';
import { IUser } from '../models/userInterface';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
@HostBinding('class') clases = 'row';
user  =  new User();
  saveForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    status : new FormControl('',[Validators.required]),
    rol : new FormControl('',[Validators.required]) 
    
  });

  userI : IUser ={
    name:'',
    rol:0 ,
    status:'',
    
  }

  edit:boolean = false


  constructor(private crudService: CruService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    const params = this.activatedRoute.snapshot.params;
    if(params.id){

      this.crudService.getOneUser(parseInt(params.id)).subscribe(res =>{
        this.user = res;
        this.edit = true;
        console.log(this.user)
      })
    }
    
  }


  updateUser() {
    this.crudService.updateUser(this.user).subscribe(
      json => {
        this.router.navigate(['/listar'])
      }
    )
  }
  saveUser(){
    this.crudService.saveUser(this.saveForm.value).subscribe(
      res=>{
        this.router.navigate(['/listar'])
      }
    )
  }

}
