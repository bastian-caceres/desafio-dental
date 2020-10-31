var dental = [
    {
        hora: "8:30", 
        especialista: "ANDREA ZUÑIGA",
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        prevision: "ISAPRE"
    },
    {
        hora: "11:00", 
        especialista: "MARIA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rut: "11123425-6",
        prevision: "ISAPRE"
    },
    {
        hora: "11:30", 
        especialista: "SCARLETT WITTING",
        paciente: "MARIO KAST",
        rut: "7998789-5",
        prevision: "FONASA"
    },
    {
        hora: "13:00", 
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rut: "18887662-K",
        prevision: "FONASA"
    },
    {
        hora: "13:30", 
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        prevision: "FONASA"
    },
    {
        hora: "14:00", 
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPULVEDA",
        rut: "14441281-0",
        prevision: "ISAPRE"
    }
];

var radiologia = [
    {
        hora: "8:30", 
        especialista: "ANDREA ZUÑIGA",
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        prevision: "ISAPRE"
    },
    {
        hora: "11:00", 
        especialista: "MARIA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rut: "11123425-6",
        prevision: "ISAPRE"
    },
    {
        hora: "11:30", 
        especialista: "SCARLETT WITTING",
        paciente: "MARIO KAST",
        rut: "7998789-5",
        prevision: "FONASA"
    },
    {
        hora: "13:00", 
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rut: "18887662-K",
        prevision: "FONASA"
    },
    {
        hora: "13:30", 
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        prevision: "FONASA"
    },
    {
        hora: "14:00", 
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPULVEDA",
        rut: "14441281-0",
        prevision: "ISAPRE"
    }
];

var traumatologia = [
    {
        hora: "8:30", 
        especialista: "ANDREA ZUÑIGA",
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        prevision: "ISAPRE"
    },
    {
        hora: "11:00", 
        especialista: "MARIA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rut: "11123425-6",
        prevision: "ISAPRE"
    },
    {
        hora: "11:30", 
        especialista: "SCARLETT WITTING",
        paciente: "MARIO KAST",
        rut: "7998789-5",
        prevision: "FONASA"
    },
    {
        hora: "13:00", 
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rut: "18887662-K",
        prevision: "FONASA"
    },
    {
        hora: "13:30", 
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        prevision: "FONASA"
    },
    {
        hora: "14:00", 
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPULVEDA",
        rut: "14441281-0",
        prevision: "ISAPRE"
    }
];


// radiologia
document.write(`
<main class="container pt-5">    
    <h1 class="text-center">radiologia</h1>
    <table class="table table-sm table-hover table-dark text-center">
        <thead>
            <tr class="bg-info">
                <th scope="col">Hora</th>
                <th scope="col">especialista</th>
                <th scope="col">paciente</th>
                <th scope="col">prevision</th>
            </tr>
        </thead>
        <tbody>
`);
radiologia.forEach(function (elementos) {
    document.write(`
        <tr>
            <td>${elementos.hora}</td>
            <td>${elementos.especialista}</td>
            <td>${elementos.paciente}</td>
            <td>${elementos.prevision}</td>
        </tr>
    `);
});
document.write(`
        </tbody>
    </table>
</main>
`);

// traumatologia
document.write(`
<main class="container pt-5">  
    <h1 class="text-center">traumatologia</h1>    
    <table class="table table-sm table-hover table-dark text-center">
        <thead>
            <tr class="bg-info">
                <th scope="col">Hora</th>
                <th scope="col">especialista</th>
                <th scope="col">paciente</th>
                <th scope="col">prevision</th>
            </tr>
        </thead>
        <tbody>
`);
traumatologia.forEach(function (elementos) {
    document.write(`
        <tr>
            <td>${elementos.hora}</td>
            <td>${elementos.especialista}</td>
            <td>${elementos.paciente}</td>
            <td>${elementos.prevision}</td>
        </tr>
    `);
});
document.write(`
        </tbody>
    </table>
</main>
`);

// dental
document.write(`
<main class="container pt-5">    
    <h1 class="text-center">dental</h1>    
    <table class="table table-sm table-hover table-dark text-center">
        <thead>
            <tr class="bg-info">
                <th scope="col">Hora</th>
                <th scope="col">especialista</th>
                <th scope="col">paciente</th>
                <th scope="col">prevision</th>
            </tr>
        </thead>
        <tbody>
`);
dental.forEach(function (elementos) {
    document.write(`
        <tr>
            <td>${elementos.hora}</td>
            <td>${elementos.especialista}</td>
            <td>${elementos.paciente}</td>
            <td>${elementos.prevision}</td>
        </tr>
    `);
});
document.write(`
        </tbody>
    </table>
</main>
`);
