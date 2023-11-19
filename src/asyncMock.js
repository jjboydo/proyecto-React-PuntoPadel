const products = [
  { id: "1", name: "Paleta Adidas Metalbone HRD 3.2", img: "/img/081-c672d18bc112e06bb216802047047685-480-0.webp", price: 450000, category: "paletas", description: "Paleta en forma Diamante", stock: 5 },
  { id: "2", name: "Paleta Royal Whip 1991", img: "/img/1471-5f0f6ae70b71452ba316941035365988-1024-1024.webp", price: 97000, category: "paletas", description: "Paleta en forma Redonda", stock: 8 },
  { id: "3", name: "Paleta Growpadel Blaze", img: "/img/401-19e2733cd64546b47516847595463392-1024-1024.webp", price: 190000, category: "paletas", description: "Paleta en forma Diamante", stock: 3 },
  { id: "4", name: "Paleta Bullpadel Hack 03 23", img: "/img/091-2c7bad85b0be0c036716897965214694-1024-1024.webp", price: 510000, category: "paletas", description: "Paleta en forma Gota", stock: 7 },
  { id: "5", name: "Camiseta Bullpadel WPT Misar Martin Di Nenno 2023", img: "/img/29532-tm_large_default_1296x.webp", price: 45000, category: "indumentaria", description: "Camiseta oficial de juego de la marca Bullpadel", stock: 50 },
  { id: "6", name: "Zapatillas Babolat Jet Premura 2 azules 2022 Juan Lebrón", img: "/img/34289-tm_large_default.webp", price: 120000, category: "indumentaria", description: "Zapatilla color Azul de la marca Babolat", stock: 17 },
  { id: "7", name: "Pantalón corto Adidas Train Essentials 2023 Azul", img: "/img/29954-tm_large_default_1296x.webp", price: 31000, category: "indumentaria", description: "Pantalón corto Adidas de color azul marino", stock: 22 },
];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        const product = products.find( p => p.id === id);
        
        setTimeout(() => {
          if(!product) {
            reject(`No se encuentra el producto con el id ${id}`)
          }
          resolve(product);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };