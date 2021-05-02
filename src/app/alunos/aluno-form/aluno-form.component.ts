import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFormCanDeactivate } from 'src/app/guards/iform-deactivate';
import { AlunosService } from 'src/app/services/alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {
  inscricao: Subscription
  aluno: any = {}
  formMudou: boolean = false
  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(params => {
      let id = params['id']
      this.aluno = this.alunosService.getAluno(id)
    })
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
  onInput() {
    this.formMudou = true
  }
  podeMudarRota() {
    if (this.formMudou) {
      confirm('Tem certeza que deseja sair dessa página? ')
    }
    return true
  }
  podeDesativar() {
    this.podeMudarRota()
  }
}
