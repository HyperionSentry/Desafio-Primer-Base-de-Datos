

// class MessagesContainer {

//     constructor(knexConfig, tableName) {
//         this.connection = require('knex')(knexConfig);
//         this.table = tableName;
        
//         this.connection.schema.hasTable(tableName).then((exists) => {
//             if (exists) return;
//             console.log('Creamos la tabla!');
            
//             return this.connection.schema.createTable(
//                 tableName,
//                 async (mensajesTable) => {
//                     mensajesTable.increments();
//                     mensajesTable.string('autor').notNullable();
//                     mensajesTable.string('texto').notNullable();
//                     mensajesTable.timestamps(true, true);
        
//                 }
//                 );
//             });

//     }


//     listarAll() {
//         return this.connection(this.table);
//     }

//     guardar(data) {
//         return this.connection(this.table).insert(data)

//     }

// }

// module.exports = MessagesContainer