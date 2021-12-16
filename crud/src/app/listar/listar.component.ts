import { Component, OnInit } from '@angular/core';
import { CruService } from '../cru.service';
import { User } from '../models/user';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  user :User[] | undefined;
  constructor(private crudService: CruService) { }

  ngOnInit(): void {

    this.getAllUser();
  }

  getAllUser(){

    this.crudService.getUsers().subscribe(
      result => {

          this.user = result;

        })

  }


  deletUser(id:any){

    this.crudService.deletUser(id).subscribe(
      res=>{
        console.log(res);
        this.getAllUser();
      }
    )
  }

}
