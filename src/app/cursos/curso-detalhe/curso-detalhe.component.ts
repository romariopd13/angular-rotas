import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {
  id: string;
  inscricao: Subscription
  curso: any
  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router
  ) {
    // console.log(this.route);
    // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(params => {
      this.id = params['id']
      this.curso = this.cursosService.getCurso(this.id)
      if (this.curso == null) {
        return this.router.navigate(['/cursos/not-found'])
      }
    })
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
