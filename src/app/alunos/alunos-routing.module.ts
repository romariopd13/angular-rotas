import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoDetalheResolver } from '../guards/aluno-detalhe.resolver';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';


const routes: Routes = [
    // { path: 'alunos', component: AlunosComponent },
    // { path: 'alunos/:id', component: AlunoDetalheComponent },
    // { path: 'alunos/:id/edit', component: AlunoFormComponent },
    // { path: 'alunos/novo', component: AlunoFormComponent },
    {
        path: '', component: AlunosComponent,
        canActivateChild: [AlunosGuard],
        children: [
            { path: 'novo', component: AlunoFormComponent },
            { path: ':id', component: AlunoDetalheComponent, resolve: { aluno: AlunoDetalheResolver } },
            { path: ':id/edit', component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard] },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }
