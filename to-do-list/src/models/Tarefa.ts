import * as enums from '../utils/enums/tarefa'

class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
  id: number
  finalizado?: Date

  constructor(
    titulo: string,
    priodidade: enums.Prioridade,
    status: enums.Status,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = priodidade
    this.status = status
    this.descricao = descricao
    this.id = id
    this.finalizado = undefined
  }
}

export default Tarefa
