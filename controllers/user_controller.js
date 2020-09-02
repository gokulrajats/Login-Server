const db = require("../db/db")
const Hash = require("../utils/hash")
const { genToken } = require("../utils/token")


const createUser =async (req,res) => {
    const { first_name, last_name, email , password } = req.body
    const hashedPassword = await Hash.hashPassword(password)
    const token = genToken({
        email,
        password
    })
    db.knex('user')
    .where({ email: email })
    .then(rows => {
        if (rows.length === 0) {
            db.knex('user').insert({
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: hashedPassword
            }).then((result) => {
                res.send({
                    status:true,
                    message: "Created User Successfully",
                    data: {
                        email: email
                    },
                    token: token
                })
            }).catch((err)=> {
                res.send({
                    error: err
                })
            })
        } else {
            res.send({
                status: false,
                message: "User Already Exists"
            })
        }
    })

}
const loginUser =async (req,res) => {
    const { email , password } = req.body
    const token = genToken({
        email,
        password
    })
    db.knex('user')
    .where({ email: email })
    .then(async rows => {
        const checkPassword = await Hash.validatePassword(password,rows[0].password)
        if (checkPassword) {
            res.send({
                message: "Successfully Logged In",
                status: true,
                token: token
            })
        } else {    
            res.send({
                message: "Enter Valid Credentials",
                status: false
            })
        }
    }).catch((err) => {
            res.send({
                error: err,
                message: "Invalid Email Credentials",
                status: false
            })
    })
}
module.exports = {
    createUser,
    loginUser
}