import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Aluno } from "../alunos/alunos";
import { AlunosService } from "../services/alunos.service";

@Injectable({
    providedIn: 'root'
})
export class AlunoDetalheResolver implements Resolve<Aluno> {
    constructor(private alunosService: AlunosService) { }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | any {
        let id = route.params['id']
        return this.alunosService.getAluno(id)
    }
}