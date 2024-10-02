import { Component, OnInit } from '@angular/core';
import { ConfiguracionService } from 'src/app/services/configuracion.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  DataConfig: any;
  colorP: any;
  colorS: any;

  constructor(private configService: ConfiguracionService) {
  }

  ngOnInit(): void {
    this.GetConfig();
  }

  GetConfig() {
    this.configService.GetConfig().subscribe(x => {
      this.DataConfig = x;
      this.colorP = this.DataConfig[0].ColorP;
      this.colorS = this.DataConfig[0].ColorS;
    });
  }




}
