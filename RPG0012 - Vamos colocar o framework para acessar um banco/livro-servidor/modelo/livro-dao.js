const Livro = require("./livro-schema");

// Função para obter todos os livros
const obterLivros = async () => {
  try {
    const livros = await Livro.find();
    return livros;
  } catch (error) {
    throw new Error(`Erro ao obter os livros: ${error.message}`);
  }
}

// Função para incluir um novo livro
const incluir = async (livro) => {
  try {
    const novoLivro = await Livro.create(livro);
    console.log(`Livro adicionado com sucesso: ${novoLivro}`);
    return novoLivro;
  } catch (error) {
    throw new Error(`Erro ao incluir o livro: ${error.message}`);
  }
}

// Função para excluir um livro por seu código
const excluir = async (codigo) => {
  try {
    const resultado = await Livro.deleteOne({ _id: codigo });
    if (resultado.deletedCount === 0) {
      throw new Error('Livro não encontrado');
    } else {
      console.log('Livro excluído com sucesso');
      return resultado;
    }
  } catch (error) {
    throw new Error(`Erro ao excluir o livro: ${error.message}`);
  }
};

module.exports = { obterLivros, incluir, excluir };
