export { productes, categories, usuaris, comentarios };

// --- ATRIBUTS ---

// PRODUCTES : id, nom, preu, descripcio, marca, categoria, pes, dimensions, foto
// CATEGORIES : id, nom, descripcio
// USUARIS : id, nom, cognoms, correu electronic, contrasenya, telefon, direccio, foto

const productes = [
  {
    id: 1,
    nom: "Vi Blanc D.O.Valdepenyas",
    preu: 2,
    descripcio: "Vi Blanc D.O.Valdepenyas 0,75 L",
    marca: "D.O.Valdepeñas",
    categoria: "Beguda",
    pes: "1.8kg",
    dimensions: "35x24x2 cm",
    foto: "vi_blanc_D-O-Valdepeñas.jpg",
  },
  {
    id: 2,
    nom: "Suc de Taronja Natural",
    preu: 1.5,
    descripcio: "Suc de taronja 100% natural 1L",
    marca: "NaturFruit",
    categoria: "Beguda",
    pes: "1kg",
    dimensions: "25x8x8 cm",
    foto: "suc_taronja_natural.jpg",
  },
  {
    id: 3,
    nom: "Pollastre fresc",
    preu: 5.3,
    descripcio: "Pollastre fresc per a rostir, 1 unitat",
    marca: "GranGranja",
    categoria: "Aliments Frescos",
    pes: "1.2kg",
    dimensions: "20x15x10 cm",
    foto: "pollastre_fresc.jpg",
  },
  {
    id: 4,
    nom: "Enciam iceberg",
    preu: 1,
    descripcio: "Enciam iceberg fresc, 1 unitat",
    marca: "EcoVerdures",
    categoria: "Aliments Frescos",
    pes: "500g",
    dimensions: "15x15x15 cm",
    foto: "enciam_iceberg.jpg",
  },
  {
    id: 5,
    nom: "Xips de patata",
    preu: 1.8,
    descripcio: "Xips de patata amb sal, 150g",
    marca: "SnackMaster",
    categoria: "Snacks",
    pes: "150g",
    dimensions: "30x20x5 cm",
    foto: "xips_patata.jpg",
  },
  {
    id: 6,
    nom: "Galetes de xocolata",
    preu: 2.5,
    descripcio: "Galetes amb xips de xocolata, 200g",
    marca: "ChocoDelight",
    categoria: "Snacks",
    pes: "200g",
    dimensions: "20x10x5 cm",
    foto: "galetes_xocolata.jpg",
  },
  {
    id: 7,
    nom: "Llet desnatada",
    preu: 1.2,
    descripcio: "Llet desnatada 1L",
    marca: "LaGranja",
    categoria: "Làctics",
    pes: "1kg",
    dimensions: "20x7x7 cm",
    foto: "llet_desnatada.jpg",
  },
  {
    id: 8,
    nom: "Formatge manxec",
    preu: 4.5,
    descripcio: "Formatge manxec curat, 200g",
    marca: "Manxeco",
    categoria: "Làctics",
    pes: "200g",
    dimensions: "15x10x5 cm",
    foto: "formatge_manxec.jpg",
  },
  {
    id: 9,
    nom: "Detergent líquid",
    preu: 6.5,
    descripcio: "Detergent líquid per a roba, 2L",
    marca: "CleanPro",
    categoria: "Productes de neteja",
    pes: "2.2kg",
    dimensions: "25x15x10 cm",
    foto: "detergent_liquid.jpg",
  },
  {
    id: 10,
    nom: "Netejavidres",
    preu: 2,
    descripcio: "Spray netejavidres, 500ml",
    marca: "BrillaNet",
    categoria: "Productes de neteja",
    pes: "600g",
    dimensions: "30x8x8 cm",
    foto: "neteja_vidres.jpg",
  },
];

const categories = [
  {
    id: 1,
    nom: "Beguda",
    descripcio: "Refrescos, sucs, aigües i altres begudes.",
  },
  {
    id: 2,
    nom: "Aliments Frescos",
    descripcio: "Productes frescos com carn, peix, fruites i verdures.",
  },
  {
    id: 3,
    nom: "Snacks",
    descripcio: "Aperitius com xips, fruits secs i galetes.",
  },
  {
    id: 4,
    nom: "Làctics",
    descripcio:
      "Llet, formatge, iogurt i altres productes derivats de la llet.",
  },
  {
    id: 5,
    nom: "Productes de neteja",
    descripcio:
      "Articles per a la neteja de la llar, com detergents i netejadors.",
  },
];

const usuaris = [
  {
    id: 1,
    nom: "Edgar",
    cognoms: "Martínez Pérez",
    correuElectronic: "edgar.martinez@example.com",
    contrasenya: "edgarpass123",
    telefon: "123456789",
    direccio: "C/Nevera 31",
    foto: "edgar.jpg"
  },
  {
    id: 2,
    nom: "Joan",
    cognoms: "García López",
    correuElectronic: "joan.garcia@example.com",
    contrasenya: "joanpass456",
    telefon: "987654321",
    direccio: "C/Mariano 21",
    foto: "joan.jpg"
  },
  {
    id: 3,
    nom: "Ivan",
    cognoms: "Rodríguez Fernández",
    correuElectronic: "ivan.rodriguez@example.com",
    contrasenya: "ivanpass789",
    telefon: "654321987",
    direccio: "C/Jose Luis 41",
    foto: "ivan.jpg"
  },
  {
    id: 4,
    nom: "Joaquin",
    cognoms: "Sánchez Ruiz",
    correuElectronic: "joaquin.sanchez@example.com",
    contrasenya: "joaquinpass123",
    telefon: "789654123",
    direccio: "C/Quico Jones 41",
    foto: "joaquin.jpg"
  },
  {
    id: 5,
    nom: "Pau",
    cognoms: "Martí Gómez",
    correuElectronic: "pau.marti@example.com",
    contrasenya: "paupass456",
    telefon: "321987654",
    direccio: "C/Mari Carmen 41",
    foto: "pau.jpg"
  },
  {
    id: 6,
    nom: "Laura",
    cognoms: "Hernández Torres",
    correuElectronic: "laura.hernandez@example.com",
    contrasenya: "laurapass789",
    telefon: "112233445",
    direccio: "C/Urano 23",
    foto: "laura.jpg"
  },
  {
    id: 7,
    nom: "Paula",
    cognoms: "Méndez Delgado",
    correuElectronic: "paula.mendez@example.com",
    contrasenya: "paulapass456",
    telefon: "223344556",
    direccio: "C/Pluton 18",
    foto: "paula.jpg"
  },
  {
    id: 8,
    nom: "Denis",
    cognoms: "López Vázquez",
    correuElectronic: "denis.lopez@example.com",
    contrasenya: "denispass123",
    telefon: "998877665",
    direccio: "C/Amapola 15",
    foto: "denis.jpg"
  },
  {
    id: 9,
    nom: "Cristian",
    cognoms: "Navarro Pons",
    correuElectronic: "cristian.navarro@example.com",
    contrasenya: "cristianpass456",
    telefon: "554433221",
    direccio: "C/Amador Rivas 12",
    foto: "cristian.jpg"
  },
  {
    id: 10,
    nom: "Quico",
    cognoms: "Ortega Rivas",
    correuElectronic: "quico.ortega@example.com",
    contrasenya: "quicopass789",
    telefon: "667788990",
    direccio: "C/Juan Pablo 21",
    foto: "quico.jpg"
  },


 


];


const comentarios = [
  {
    puntuacion: 5,
    idUsuario: 1,
    idProducto: 1,
    descripcion: "Este producto es bueno"

  },
  {
    puntuacion: 2,
    idUsuario: 2,
    idProducto: 1,
    descripcion: "Este producto no es bueno"

  },
  {
    puntuacion: 7,
    idUsuario: 3,
    idProducto: 4,
    descripcion: "Este producto es muy bueno"

  },
  {
    puntuacion: 1,
    idUsuario: 4,
    idProducto: 1,
    descripcion: "Este producto no es bueno"

  },
  {
    puntuacion: 2,
    idUsuario: 3,
    idProducto: 2,
    descripcion: "Este producto es muy malo"

  },
  {
    puntuacion: 9,
    idUsuario: 2,
    idProducto: 3,
    descripcion: "Este producto es excelente"

  },

];
