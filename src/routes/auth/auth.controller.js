const btoa = require('btoa')
const axios = require('axios')
const { urlLogin, basicAuth, headers, username, password, urlReg, urlGoods, urlNotifications, urlOrderCheck, urlConfirmation_sale, urlRejectOrder, urlSendOpinion, urlOrderConfirmList, urlBalance, urlOrderBalance, urlRate, urlOrder, urlBalanceDetail_base64, urlBalanceDetail, urlBonusReport, urlBonusReport_base64, urlDeficitList, username_sh, password_sh } = require('../../config/urls')

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
const reg = async (req,res) => {
    try {
        console.log(req.body);
        const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
        let result = []
        const authorization = `Basic ${encodedBase64Token}`;

        const responce = await axios({
            url: urlReg,
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

const goods = async (req,res) => {
    try {
        const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
        let result = []
        const authorization = `Basic ${encodedBase64Token}`;

        const responce = await axios({
            url: urlGoods,
            method: 'GET',
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

const notifications = async (req,res) => {
    try {
        const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
        let result = []
        const authorization = `Basic ${encodedBase64Token}`;

        const responce = await axios({
            url: urlNotifications,
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

const orderCheck = async (req,res) => {
    try {
        const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
        let result = []
        const authorization = `Basic ${encodedBase64Token}`;

        const responce = await axios({
            url: urlOrderCheck,
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


const orderConfirm = async (req,res) => {
    try {
        const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
        let result = []
        const authorization = `Basic ${encodedBase64Token}`;

        const responce = await axios({
            url: urlConfirmation_sale,
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


const reject_order = async (req,res) => {
    try {
        const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
        let result = []
        const authorization = `Basic ${encodedBase64Token}`;

        const responce = await axios({
            url: urlRejectOrder,
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


const sendOpinion = async (req,res) => {
    try {
        const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
        let result = []
        const authorization = `Basic ${encodedBase64Token}`;

        const responce = await axios({
            url: urlSendOpinion,
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

const confirmList = async (req,res) => {
    try {
        const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
        let result = []
        const authorization = `Basic ${encodedBase64Token}`;

        const responce = await axios({
            url: urlOrderConfirmList,
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

const balance = async (req,res) => {
    try {
        const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
        let result = []
        const authorization = `Basic ${encodedBase64Token}`;

        const responce = await axios({
            url: urlOrderBalance,
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

const rate = async (req,res) => {
    try {
        const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
        let result = []
        const authorization = `Basic ${encodedBase64Token}`;

        const responce = await axios({
            url: urlRate,
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

const order = async (req,res) => {
    try {
        const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
        let result = []
        const authorization = `Basic ${encodedBase64Token}`;

        const responce = await axios({
            url: urlOrder,
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

const act_sverki = async (req,res) => {
    try {
        const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
        let result = []
        const authorization = `Basic ${encodedBase64Token}`;

        const responce = await axios({
            url: urlBalanceDetail_base64,
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

const act_sverki_mobile = async (req,res) => {
    try {
        const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
        let result = []
        const authorization = `Basic ${encodedBase64Token}`;

        const responce = await axios({
            url: urlBalanceDetail,
            method: 'GET',
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

const sverka = async (req,res) => {
    try {
        const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
        let result = []
        const authorization = `Basic ${encodedBase64Token}`;

        const responce = await axios({
            url: urlBalance,
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

const act_sverki_base64 = async (req,res) => {
    try {
        const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
        let result = []
        const authorization = `Basic ${encodedBase64Token}`;

        const responce = await axios({
            url: urlBalanceDetail_base64,
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

const bonus = async (req,res) => {
    try {
        const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
        let result = []
        const authorization = `Basic ${encodedBase64Token}`;

        const responce = await axios({
            url: urlBonusReport,
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

const reportBonus = async (req,res) => {
    try {
        const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
        let result = []
        const authorization = `Basic ${encodedBase64Token}`;

        const responce = await axios({
            url: urlBonusReport_base64,
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

const deficit = async (req,res) => {
    try {
        const encodedBase64Token = Buffer.from(`${username_sh}:${password_sh}`).toString('base64');
        let result = []
        const authorization = `Basic ${encodedBase64Token}`;

        const responce = await axios({
            url: urlDeficitList,
            method: 'GET',
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


module.exports = {
    login,
    reg,
    goods,
    orderCheck,
    orderConfirm,
    notifications,
    reject_order,
    sendOpinion,
    confirmList,
    balance,
    rate,
    order,
    sverka,
    act_sverki_base64,
    act_sverki_mobile,
    act_sverki,
    bonus,
    reportBonus,
    deficit
}