import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from 'src/app/services/alunos.service';
import { Aluno } from '../alunos';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  inscricao: Subscription
  aluno: Aluno
  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.inscricao = this.route.params.subscribe(params => {
    //   let id = params['id']
    //   this.aluno = this.alunosService.getAluno(id)
    //   // if (this.aluno == null) {
    //   //   return this.router.navigate(['/curso-not-found'])
    //   // }
    // })
    this.inscricao = this.route.data.subscribe(res => {
      this.aluno = res.aluno
    })
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
  editarContata() {
    this.router.navigate(['/alunos', this.aluno.id, 'edit'])
  }
}
