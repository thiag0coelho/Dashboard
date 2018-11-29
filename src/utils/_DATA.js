let dashboards = {
    Atendimento: {
        classe: null,
        destaque: {
            titulo: "215",
            texto: "atendimentos realizados"
        },
        secundario: {
            titulo: "tempo médio",
            texto: "5min",
            lista: null
        },
        primeiraSecao: [
            { titulo: "100", texto: "consultas débitos", classe: null },
            { titulo: "50", texto: "emissões de 2ª via da fatura", classe: null },
            { titulo: "100", texto: "solicitações", classe: null },
            { titulo: "20", texto: "reclamações", classe: null },
        ],
        primeiraSecaoVertical: null
    },
    Servicos: {
        classe: "alerta",
        destaque: {
            titulo: "800",
            texto: "programados"
        },
        secundario: {
            titulo: "",
            texto: "",
            lista: [
                { titulo: "50", texto: "pendentes", classe: null },
                { titulo: "20", texto: "cancelados", classe: "vermelho" },
                { titulo: "40", texto: "executados", classe: "verde" },
            ]
        },
        primeiraSecao: [
            { titulo: "215", texto: "fora do prazo", classe: "alerta" },
            { titulo: "2h", texto: "média de execução", classe: "azul" },
            { titulo: "30", texto: "ligações", classe: null },
        ],
        primeiraSecaoVertical: null
    },
    Arrecadação: {
        classe: "atencao",
        destaque: null,
        secundario: {
            titulo: null,
            texto: null,
            lista: [
                { titulo: "R$ 205.133,25", texto: "à receber", classe: "destaque" },
                { titulo: "R$ 421.678.102,43", texto: "pública", classe: null },
                { titulo: "R$ 147.258.369,12", texto: "industrial", classe: null },
                { titulo: "R$ 32.165.498,70", texto: "comercial", classe: null },
                { titulo: "R$ 32.165.498,70", texto: "residencial", classe: null },
            ]
        },
        primeiraSecao: [
            { titulo: "R$ 55.025,35", texto: "contas pagas", classe: null },
            { titulo: "2.144", texto: "negociações efetuadas", classe: null },
        ],
        primeiraSecaoVertical: [
            { titulo: "13.500", texto: "faturas DAC", classe: null },
            { titulo: "20%", texto: "negociações", classe: null },
            { titulo: "6,45%", texto: "inadimp.", classe: null },
        ]
    },
    Leituras: {
        classe: "alerta",
        destaque: {
            titulo: "3.000",
            texto: "leituras efetuadas"
        },
        secundario: null,
        primeiraSecao: [
            { titulo: "2.000", texto: "rotas leitura", classe: null },
            { titulo: "5%", texto: "de rotas enviadas", classe: null },
            { titulo: "20%", texto: "de rotas recebidas", classe: null },
            { titulo: "20", texto: "impressões avisos corte", classe: "alerta" },
        ],
        primeiraSecaoVertical: [
            { titulo: "10", texto: "ocorrências", classe: null },
            { titulo: "200", texto: "leituristas", classe: null },
        ]
    }
};

let atendimentos = {
    titulo: "Atendimento",
    destaque: {
        titulo: "800",
        texto: "programados"
    },
    secundario: {
        titulo: "tempo médio",
        texto: "5min"
    },
    primeiraSecao: [
        { titulo: "100", text: "consultas débitos" },
        { titulo: "50", text: "emissões de 2ª via da fatura" },
        { titulo: "100", text: "solicitações" },
        { titulo: "20", text: "reclamações" },
    ]
};

export function _recebeAtendimentos() {
    return new Promise((res, rej) => {
        res({ ...atendimentos });
    })
}

export function _recebeDashboards() {
    return new Promise((res, rej) => {
        res({ ...dashboards });
    })
}
