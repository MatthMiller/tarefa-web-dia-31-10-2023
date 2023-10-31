import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.scss'],
})
export class ListaTarefasComponent {
  public tarefas = [
    { descricao: 'Beber 3L de água', concluida: false },
    { descricao: 'Fazer o almoço', concluida: true },
    { descricao: 'Lavar a louça', concluida: true },
    { descricao: 'Ler 30 páginas', concluida: true },
    { descricao: 'Programar por 3 horas', concluida: false },
  ];

  toggleConcluir(tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }
}
