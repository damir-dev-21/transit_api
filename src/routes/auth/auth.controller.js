const btoa = require('btoa')
const axios = require('axios')
const { urlLogin, basicAuth, headers, username, password } = require('../../config/urls')

const login = async (req,res) => {
    try {
        console.log(req.body);
        const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
        let result = []
        const authorization = `Basic ${encodedBase64Token}`;

        const responce = await axios({
            url: urlLogin,
            method: 'POST',
            data:req,
            headers: {
                Authorization: authorization
            },
            
        }).then(res => {
            result = res.data
        })
        res.header("Access-Control-Allow-Origin", "*");
        return res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}

const getProductsFromDB = async (req, res) => {
    const results = await getAllProducts()
    res.header("Access-Control-Allow-Origin", "*");
    return res.status(200).json(results)
}

module.exports = {
    login,
}