
class Iniciativa {
    constructor(colaboratorID, titulo, descricao, estado, data, horaInicio, duracao, imagem, materiais, profissionais) {
        this.id = null;
        console.log("Iniciativa criada por:", colaboratorID);
        this.colaboratorID = colaboratorID;
        this.titulo = titulo;
        this.descricao = descricao;
        this.estado = estado; // 'pendente', 'aceite', 'recusada', 'a decorrer' ,'concluida'
        this.nParticipantes = 0;
        this.listaParticipantes = []; //userIDs
        this.data = data;
        this.horaInicio = horaInicio;
        this.duracao = duracao;
        this.satisfacaoMedia = null;
        this.imagem = imagem;
        this.materiais = materiais || [];
        this.profissionais = profissionais || [];
    }
}

export { Iniciativa };