const MATERIAS = document.querySelector('.materias');
const HOJE = new Date();
const DATA_INICIAL = new Date('2023-04-03T00:00:00');
const LISTA_MATERIAS = [
    {
        "nome": "Penal",
        "horas": 3
    },
    {
        "nome": "Tributário",
        "horas": 1
    },
    {
        "nome": "Empresarial",
        "horas": 1
    },
    {
        "nome": "Processo Penal",
        "horas": 3
    },
    {
        "nome": "Institucional",
        "horas": 1
    },
    {
        "nome": "Execução Penal",
        "horas": 1
    },
    {
        "nome": "Civil",
        "horas": 3
    },
    {
        "nome": "Consumidor",
        "horas": 1
    },
    {
        "nome": "Processo Civil",
        "horas": 3
    },
    {
        "nome": "Criminologia",
        "horas": 1
    },
    {
        "nome": "Constitucional",
        "horas": 2
    },
    {
        "nome": "Administrativo",
        "horas": 2
    },
    {
        "nome": "Direitos Humanos",
        "horas": 2
    },
    {
        "nome": "Crinça e Adolescente",
        "horas": 2
    },
    {
        "nome": "Difusos e Coletivos",
        "horas": 2
    },
    {
        "nome": "Informativos",
        "horas": 2
    }
]
const BLOCOS = [
    ["Penal", "Tributário", "Empresarial"],
    ["Processo Penal", "Institucional", "Execução Penal"],
    ["Civil", "Consumidor"],
    ["Processo Civil", "Criminologia"],
    ["Constitucional", "Administrativo"],
    ["Direitos Humanos", "Crinça e Adolescente"],
    ["Difusos e Coletivos", "Informativos"]
]

MATERIAS.innerHTML= geraListaMaterias();

function geraListaMaterias() {
    [m, p] = materiasDeHoje()
    if ( m.length > 2 ) {
        m = [m[0], m[p+1]]
    }
    materias = (() => {
        m_temp = []
        m.forEach(e => {
            m_temp.push(LISTA_MATERIAS.find(e2=>e===e2.nome))
        })
        m_temp.forEach(e=>console.log(e))
        return m_temp
    })();
    s = `<ul>`
    materias.forEach(e => {
        s += `\n<li>${e.nome} (${e.horas}h)`
    });
    return s
}

function materiasDeHoje(){
    const umDiaEmMS = 1000 * 60 * 60 * 24;
    let hoje = HOJE.getDay() === 0 ? new Date(HOJE.getTime() - umDiaEmMS) : HOJE
    const dias = Math.floor((hoje.getTime() - DATA_INICIAL.getTime())/umDiaEmMS)
    console.log("dias:",dias)
    const semanas = Math.floor(dias / 7);
    console.log("semanas:",semanas)
    let index = (dias % 7) - (semanas % 7);
    if (index < 0 ) {
        index = BLOCOS.length + index
    }
    console.log("index:",index)
    return [BLOCOS[index], semanas%2];
}