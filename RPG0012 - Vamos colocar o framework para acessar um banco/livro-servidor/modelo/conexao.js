const mongoose = require('mongoose');

// Opções de conexão
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

// URL de conexão com o bd
const databaseURL = 'mongodb://localhost/nome-do-banco';

// Função para conectar ao bd
const conectarBanco = async () => {
  try {
    await mongoose.connect(databaseURL, options);
    console.log('Conexão com MongoDB estabelecida');
  } catch (err) {
    console.error(`Erro na conexão com MongoDB: ${err}`);
  }
};

// Função para desconectar do bd
const desconectarBanco = () => {
  mongoose.disconnect()
    .then(() => console.log('Desconexão com MongoDB bem-sucedida'))
    .catch(err => console.error(`Erro na desconexão com MongoDB: ${err}`));
};

// Evento para desconectar do bd
process.on('SIGINT', () => {
  desconectarBanco();
  process.exit(0);
});

module.exports = { conectarBanco, desconectarBanco };
