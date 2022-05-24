// class ProductsContainer {
//     constructor(knexConfig, tableName) {
//         this.connection = require('knex')(knexConfig);
//         this.table = tableName;

//         this.connection.schema.hasTable(tableName).then((exists) => {
//             if (exists) return;
//             console.log('Creamos la tabla!');
            
//             return this.connection.schema.createTable(
//                 tableName,
//                 async (productosTable) => {
//                     productosTable.increments();
//                     productosTable.string('title').notNullable();
//                     productosTable.integer('price').notNullable();
//                     productosTable.string('thumbnail').notNullable();
        
//                     const initProducts = [
//                         {
//                             title: 'The Very Best of the Doors 2CD',
//                             price: 190,
//                             thumbnail: 'https://m.media-amazon.com/images/I/91hrbype4aL._SY355_.jpg',
//                         },
//                         {
//                             title: 'Blood Sugar Sex Magik',
//                             price: 150,
//                             thumbnail: 'https://m.media-amazon.com/images/I/81hS2wgxbhL._SY355_.jpg',
//                         },
//                         {
//                             title: 'Pearl Jam Completely Unplugged Limited Edition',
//                             price: 250,
//                             thumbnail: 'https://m.media-amazon.com/images/I/81NDZb-JShL._SY355_.jpg',
//                         },
//                     ];
        
//                     const createProducts = initProducts.map((aProduct) =>
//                     this.create(tableName, aProduct)
//                     );
//                     await Promise.all(createProducts);
//                 }
//                 );
//             });
//     }

//     create(table, data) {
//         return this.connection(table).insert(data);
//     }

//     listarAll() {
//         return this.connection(this.table);
//     }

//     guardar(data) {
//         return this.connection(this.table).insert(data)

//     }

// }

/