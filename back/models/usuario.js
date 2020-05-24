var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var usuarioSchema = new mongoose.Schema({
    usuario: {type: String, required: [true, "Usuário é obrigatório"], unique: true},
    descricao: {type: String, required: [true, "Descrição não pode ficar em branco"]},
    profissional: {type: Boolean},
    ativo: {type: Boolean}
}, {timestamp: true});

usuarioSchema.plugin(uniqueValidator, { message: 'Usuário já cadastrado'});

mongoose.model('Usuario', usuarioSchema);

module.exports = {Mongoose: mongoose, UsuarioSchema: usuarioSchema};