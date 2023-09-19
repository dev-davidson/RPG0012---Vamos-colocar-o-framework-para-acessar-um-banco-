import mongoose from 'mongoose';
import { banco } from './conexao.js';

const LivroSchema = new banco.Schema({
  _id: banco.Schema.Types.ObjectId, // Corrigi o tipo de dados
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String]
});

const LivroModel = banco.model("Livros", LivroSchema); // Usei 'banco' em vez de 'mongoose'
export default LivroModel; // Exportando o modelo como padrão
