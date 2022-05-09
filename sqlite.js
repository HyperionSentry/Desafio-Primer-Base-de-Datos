const sqliteOptions = {
    client: 'sqlite3',
    connection: { filename: './myDB.sqlite' },
    useNullAsDefault: true,
  };
  
  module.exports = {
    sqliteOptions,
  };