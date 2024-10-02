import { Component, OnInit } from '@angular/core';
import { ConfiguracionService } from './services/configuracion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app2';
  conected:boolean|undefined;
  DataConfig:any;

  constructor(private configService:ConfiguracionService){}
  
  ngOnInit(): void {
    this.GetConfig();
  }

  GetConfig(){
    this.configService.GetConfig().subscribe (x => {
      this.DataConfig = x;

      if(this.DataConfig === "" || this.DataConfig === undefined){
        this.conected = false;
      } else {
        this.conected = true;
      }
    });
  }


}
