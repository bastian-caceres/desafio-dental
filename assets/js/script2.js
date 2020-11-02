class pacientes{
    constructor(hora,especialista,paciente,rut,prevencion){
        this.hora = hora;
        this.especialista = especialista;
        this.paciente = paciente;
        this.rut = rut;
        this.prevencion = prevencion;
    }
}

var paciente1 = new pacientes("8:30","ANDREA ZUÑIGA","MARCELA RETAMAL", "11123425-6","ISAPRE")
var paciente2 = new pacientes("11:00","MARIA PIA ZAÑARTU","ANGEL MUÑOZ", "9878789-2","ISAPRE")
var paciente3 = new pacientes("11:30","SCARLETT WITTING","MARIO KAST", "7998789-5","FONASA")
var paciente4 = new pacientes("13:00","FRANCISCO VON TEUBER","KARIN FERNANDEZ", "18887662-K","FONASA")
var paciente5 = new pacientes("13:30","EDUARDO VIÑUELA","HUGO SANCHEZ", "17665461-4","FONASA")
var paciente6 = new pacientes("14:00","RAQUEL VILLASECA","ANA SEPULVEDA", "14441281-0","ISAPRE")

console.log(Object.entries(paciente1));


// document.write(`
// <main class="container pt-5">    
//     <h1 class="text-center">experimento Paciente</h1>    
//     <table class="table table-sm table-hover table-dark text-center">
//         <thead>
//             <tr class="bg-info">
//                 <th scope="col">Hora</th>
//                 <th scope="col">especialista</th>
//                 <th scope="col">paciente</th>
//                 <th scope="col">rut</th>
//                 <th scope="col">prevision</th>
//             </tr>
//         </thead>
//         <tbody>
// `);
// paciente1.forEach(function (e) {
//     document.write(`
//     <tr>
//         <td>${e}</td>
//         <td>${e}</td>
//         <td>${e}</td>
//         <td>${e}</td>
//         <td>${e}</td>
//     </tr>
// `);
// });

// document.write(`
//         </tbody>
//     </table>
// </main>
// `);





