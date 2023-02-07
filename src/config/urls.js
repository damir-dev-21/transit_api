const btoa = require('btoa')
const url = "http://web.corp.siyob.uz:9696"
const urlLogin = `${url}/sklad/hs/mobile/login/`
const username = "Программист"
const password = "1598753"
const headers = {'Authorization': 'Basic '+ btoa(`${username}:${password}`) }
const basicAuth = "Basic " + btoa(`${username} + ":" + ${password}`)
module.exports = {
    urlLogin,
    basicAuth,
    headers,
    username,password
}