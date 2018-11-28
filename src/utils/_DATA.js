let dashboards = {
    Atendimento: {
    destaque: {
        titulo: "215",
        texto: "atendimentos realizados"
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
