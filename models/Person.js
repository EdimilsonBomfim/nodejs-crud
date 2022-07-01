const mongoose = require('mongoose')
const { stringify } = require('nodemon/lib/utils')

//Criando entidade na tabela Person
const Person = mongoose.model('Person',{
        name: String,
        salary: Number,
        bank: String,
        agencia: Number,
        conta: Number,
        approved: Boolean,

})

//Exportar para pode usar em outro lugar na aplicação
module.exports = Person