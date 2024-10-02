import { Component, OnInit } from '@angular/core';
import { ConfiguracionService } from 'src/app/services/configuracion.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  titulo: any;
  subtitulo: any;
  menu: any;
  footer: any;
  colorP: any;
  colorS: any;
  logo: any;

  DataConfig: any;
  editar: boolean | undefined;

  constructor(private configService: ConfiguracionService) { }

  ngOnInit(): void {
    this.GetConfig();
    this.editar = false;
  }

  GetConfig() {
    this.configService.GetConfig().subscribe(x => {
      this.DataConfig = x;
      this.titulo = this.DataConfig[0].Titulo;
      this.subtitulo = this.DataConfig[0].Subtitulo;
      this.menu = this.DataConfig[0].Menu;
      this.footer = this.DataConfig[0].Footer;
      this.colorP = this.DataConfig[0].ColorP;
      this.colorS = this.DataConfig[0].ColorS;
      this.logo = this.DataConfig[0].Logo;
    });
  }

  EditarDatos() {
    this.editar = true;
  }

  GuardarDatos() {
    let objecto = {
      Id: 1,
      Titulo: this.titulo,
      Subtitulo: this.subtitulo,
      Menu: this.menu,
      Footer: this.footer,
      ColorP: this.colorP,
      ColorS: this.colorS,
      Logo: this.logo
    }

    this.configService.UpdateConfig(objecto).subscribe(x => {
      location.reload();
    });

  }
}