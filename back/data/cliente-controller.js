var db = require('./db');
var Cliente = db.Mongoose.model('Cliente');
const limit = 10;

exports.get = function(req, res, next){
    const pagAtual = parseInt(req.query.pag || '1');
    let params = req.query.q || '';
    let skip = limit * (pagAtual - 1);
    
    let query;
    if(params){
        // query = { 'nome': { $regex: '.*' + queryParam + '.*' } };
        query = { 'nome': params };
    }

    Cliente.find(query).skip(skip).limit(limit + 1).sort('nome').select('id nome').exec(
        (err, clientes) => {
            if(err){
                return res.json({sucess: false, msg: 'Ocorreu um erro ao buscar os serviços"'});
            }

            let hasNext = false;
            if(clientes.length > limit){
                clientes.pop();
                hasNext = true;
            }

            let pag = {
                atual: pagAtual,
                hasNext: hasNext,
                q: params
            }

            res.json({sucess: true, 'clientes': clientes, 'pagina': pag});
        });
}

exports.getById = function (req, res, next){
    let id = req.params.id;
    Cliente.findOne({_id: id}).exec(
        (err, cliente) => {
            if(err){
            return res.json({success: false, msg: 'Não foi possível encontrar o serviço!'});
        }
        res.json({success: true, 'cliente': cliente});
    });
}

exports.save = function (req, res){
    if(req.body._id){
        Cliente.findOneAndUpdate({_id: req.body._id}, req.body, {new: true},
            (err,newCliente) =>{
                if(err){
                    let msg = '';
                    for(var erro in err.errors){
                        msg = err.errors[erro].message;
                        break;
                    }
                    return res.json({success:false , msg: msg})
                }
                res.json({success: true, msg: 'Salvo com sucesso!', cliente: newCliente});
            })
    }else{
        let cliente = new Cliente({
            nome: req.body.nome,
            telefone: req.body.telefone,
            cpf: req.body.cpf
        });

        cliente.save(function(err, newCliente){
            if(err){
                let msg = '';
                for(let erro in err.errors){
                    msg = err.errors[erro].message;
                    break;
                }
                return res.json({success: false, msg: msg});
            } else{
                res.json({success: true, msg: 'Salvo com sucesso!', cliente: newCliente});
            }
        });
    }
}

exports.delete = function (req, res) {
    Cliente.findOneAndDelete({ '_id': req.params.id }, function (err, cliente) {
        if (err) {
            return res.json({ success: false, msg: 'Ocorreu um erro ao excluir!' });
        }
        
        res.json({ success: true, msg: 'Excluído com sucesso!' });
    });
};