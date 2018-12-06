var guid = () => Math.random().toString(36).substring(2) 
               + (new Date()).getTime().toString(36);

let dashboards = {
    Atendimento: {
        destaque: {
            titulo: "215",
            texto: "atendimentos realizados"
        },
        secundario: {
            titulo: "tempo médio",
            texto: "5min",
        },
        primeiraSecao: [
            { id: guid(), titulo: "100", texto: "consultas débitos" },
            { id: guid(), titulo: "50", texto: "emissões de 2ª via da fatura" },
            { id: guid(), titulo: "100", texto: "solicitações" },
            { id: guid(), titulo: "20", texto: "reclamações" },
        ],
    },
    Servico: {
        classe: "alerta",
        destaque: {
            titulo: "800",
            texto: "programados"
        },
        secundario: {
            lista: [
                { id: guid(), titulo: "50", texto: "pendentes" },
                { id: guid(), titulo: "20", texto: "cancelados", classe: "vermelho" },
                { id: guid(), titulo: "40", texto: "executados", classe: "verde" },
            ]
        },
        primeiraSecao: [
            { id: guid(), titulo: "215", texto: "fora do prazo", classe: "alerta" },
            { id: guid(), titulo: "2h", texto: "média de execução", classe: "azul" },
            { id: guid(), titulo: "30", texto: "ligações" },
        ],
    },
    Arrecadação: {
        classe: "atencao",
        secundario: {
            lista: [
                { id: guid(), titulo: "R$ 205.133,25", texto: "à receber", classe: "destaque" },
                { id: guid(), titulo: "R$ 421.678.102,43", texto: "pública" },
                { id: guid(), titulo: "R$ 147.258.369,12", texto: "industrial" },
                { id: guid(), titulo: "R$ 32.165.498,70", texto: "comercial" },
                { id: guid(), titulo: "R$ 32.165.498,70", texto: "residencial" },
            ]
        },
        primeiraSecao: [
            { id: guid(), titulo: "R$ 55.025,35", texto: "contas pagas" },
            { id: guid(), titulo: "2.144", texto: "negociações efetuadas" },
        ],
        primeiraSecaoVertical: [
            { id: guid(), titulo: "13.500", texto: "faturas DAC" },
            { id: guid(), titulo: "20%", texto: "negociações" },
            { id: guid(), titulo: "6,45%", texto: "inadimp." },
        ]
    },
    Leitura: {
        classe: "alerta",
        destaque: {
            titulo: "3.000",
            texto: "leituras efetuadas"
        },
        primeiraSecao: [
            { id: guid(), titulo: "2.000", texto: "rotas leitura" },
            { id: guid(), titulo: "5%", texto: "de rotas enviadas" },
            { id: guid(), titulo: "20%", texto: "de rotas recebidas" },
            { id: guid(), titulo: "20", texto: "impressões avisos corte", classe: "alerta" },
        ],
        primeiraSecaoVertical: [
            { id: guid(), titulo: "10", texto: "ocorrências" },
            { id: guid(), titulo: "200", texto: "leituristas" },
        ]
    },
    Faturamento: {
        secundario: {
            lista: [
                { id: guid(), titulo: "R$ 1.070.000,00", texto: "resumo", classe: "destaque" },
                { id: guid(), titulo: "R$ 330.000,00", texto: "água" },
                { id: guid(), titulo: "R$ 200.000,00", texto: "esgoto" },
                { id: guid(), titulo: "R$ 540.000,00", texto: "serviços" },
            ]
        },
        primeiraSecao: [
            { id: guid(), titulo: "7.352", texto: "demonst. economias" },
            { id: guid(), titulo: "2.144m³", texto: "índice consumo" },
        ],
        primeiraSecaoVertical: [
            { id: guid(), titulo: "34.701", texto: "fat. emitidas" },
            { id: guid(), titulo: "2.015", texto: "refaturam." },
            { id: guid(), titulo: "4.443", texto: "parcelam." },
        ]
    },
    Operacional: {
        classe: "atencao",
        destaque: {
            titulo: "040",
            texto: "total de serviços"
        },
        secundario: {
            titulo: "tempo médio",
            texto: "2h",
        },
        primeiraSecao: [
            { id: guid(), titulo: "40", texto: "serviços fora do prazo" },
            { id: guid(), titulo: "40", texto: "equipes em campo" },
        ],
    },
    Hidrometria: {
        classe: "atencao",
        destaque: {
            titulo: "888.000",
            texto: "hidrômetros instalados"
        },
        primeiraSecao: [
            { id: guid(), titulo: "780.000", texto: "un. com hidrômetro" },
            { id: guid(), titulo: "20.000", texto: "un. sem hidrômetro" },
            { id: guid(), titulo: "5%", texto: "hidrômetro substituídos" },
            { id: guid(), titulo: "9%", texto: "hidrômetros avariados" },
        ],
    },
    Jurídico: {
        secundario: {
            lista: [
                { id: guid(), titulo: "10.210", texto: "faturas em processo", classe: "destaque" },
                { id: guid(), titulo: "3.020", texto: "administrativo" },
                { id: guid(), titulo: "7.190", texto: "judicial" },
            ]
        },
        primeiraSecao: [
            { id: guid(), titulo: "88.000", texto: "unidades em processo" },
            { id: guid(), titulo: "5.200", texto: "notificações imp." },
            { id: guid(), titulo: "2.500", texto: "CDA impressas" },
        ],
        primeiraSecaoVertical: [
            { id: guid(), titulo: "200", texto: "DA canceladas" },
            { id: guid(), titulo: "2.200", texto: "faturas em DA" },
            { id: guid(), titulo: "1.400", texto: "em execução" },
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
