
const bcrypt = require('bcrypt')
const User = require('../models/User')


// Registrar usuário
exports.registrar = async (req,res) => {
    const {email, name, password, confirmpassword} = req.body

    // Validações
    if(!name){
        return res.status(422).json({msg: 'O nome é obrigatório'})
    }
    if(!email){
        return res.status(422).json({msg: 'O email é obrigatório'})
    }
    if(!password){
        return res.status(422).json({msg: 'A senha é obrigatória'})
    }
    if(password != confirmpassword){
        return res.status(422).json({msg: 'As senhas não conferem'})
    }

    // Conferir se o usuario existe
    const userExists = await User.findOne({email: email})
    if(userExists){
        return res.status(422).json({msg: 'Email já cadastrado, insira outro email'})
    }

    // Criar senha
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    // Criar usuario
    const user = new User({
        name,
        email,
        password: passwordHash
    })

    try {
        await user.save()
        res.status(201).json({msg: 'Usuario criado'})
    } catch(error){
        console.log(error)
        res.status(500).json({msg: error})
    }
}

// Login
exports.login = async (req, res) => {
    const {email, password} = req.body

    // Validações
    if(!email){
        return res.status(422).json({msg: 'O email é obrigatório'})
    }
    if(!password){
        return res.status(422).json({msg: 'A senha é obrigatória'})
    }

    // Conferir se o usuario existe
    const user = await User.findOne({email: email})
    if(!user){
        return res.status(422).json({msg: 'Email invalido'})
    }

    // Conferir senha
    const checkPassword = await bcrypt.compare(password, user.password)
    if(!checkPassword){
        return res.status(422).json({msg: 'Senha invalida'})
    }
}
