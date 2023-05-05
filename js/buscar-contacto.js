import get from 'lodash/get.js';

console.log(get({name: 'Andry'}, 'name', 'No Name'));

const contactos = [
    {
        nombre: "Nora",
        apellido: "Navas",
        numero: "123456",
        gustos: ["Pizza", "Programacion"]
    },
    {
        nombre: "Andry",
        apellido: "Peña",
        numero: "78965",
        gustos: ["Sexo", "Jose Gabriel"]
    },
    {
        nombre: "Carolina",
        apellido: "Villamizar",
        numero: "3245667",
        gustos: ["Bailar", "Ir de paseo"]
    },
    {
        nombre: "Kevin",
        apellido: "Villamizar",
        numero: "375667",
        gustos: ["Futbol", "Ir de paseo"]
    },
    {
        nombre: "Villa",
        apellido: "Loaiza",
        numero: "789635",
        gustos: ["Beisbol", "Comer"]
    }
];

// let busqueda = "villa"

// const contactosEncontrados = contactos.filter((item) => {
//     return item.nombre.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())
//     || item.apellido.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())
//     || item.numero.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase());
// });
// console.log(contactosEncontrados);

/**
 * 
 * @param {Perfil[]} contactos 
 * @param {String} busqueda 
 * @returns {Array}
 */
function buscarPerfiles(perfiles, busqueda) {
    return perfiles.filter((item) => {
      return item.nombre?.toLocaleLowerCase()?.includes(busqueda.toLocaleLowerCase())
      || item.apellido?.toLocaleLowerCase()?.includes(busqueda.toLocaleLowerCase())
      || item.numero?.toLocaleLowerCase()?.includes(busqueda.toLocaleLowerCase());
    });
}

console.log(buscarPerfiles(contactos, "villa"));

