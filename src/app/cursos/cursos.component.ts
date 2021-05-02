import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: any[]
  pagina: number;
  inscricao: Subscription;
  constructor(
    private cursosService: CursosService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    this.inscricao = this.activatedRouter.queryParams.subscribe(
      query => {
        this.pagina = query['pagina']
      }
    )
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
  proximaPagina() {
    // this.pagina++;
    this.router.navigate(['/cursos'], {
      queryParams: { 'pagina': ++this.pagina }
    })
  }
}
