class Iniciativa {
    constructor(id, colaboratorID, titulo, descricao, estado, nParticipantes, listaParticipantes, data, horaInicio, duracao, satisfacaoMedia, imagem, materiais, profissionais) {
        this.id = id;
        this.colaboratorID = colaboratorID;
        this.titulo = titulo;
        this.descricao = descricao;
        this.estado = estado; // 'pendente', 'aceite', 'recusada', 'a decorrer' ,'concluida'
        this.nParticipantes = nParticipantes;
        this.listaParticipantes = listaParticipantes || []; //userIDs
        this.data = data;
        this.horaInicio = horaInicio;
        this.duracao = duracao;
        this.satisfacaoMedia = satisfacaoMedia;
        this.imagem = imagem;
        this.materiais = materiais || [];
        this.profissionais = profissionais || [];
    }
}

export { Iniciativa };