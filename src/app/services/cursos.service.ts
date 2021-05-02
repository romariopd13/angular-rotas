import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  getCursos() {
    return [
      { id: 1, nome: "Angular" },
      { id: 2, nome: "Laravel" },
      { id: 3, nome: "Ionic" },
    ]
  }
  getCurso(id) {
    return this.getCursos().find(x => x.id == id);

  }
  constructor() { }
}
