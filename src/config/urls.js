const btoa = require('btoa')
const url = "http://web.corp.siyob.uz:9696"
const urlLogin = `${url}/sklad/hs/mobile/login/`
const urlReg = `${url}/sklad/hs/mobile/reg/`
const urlGoods = `${url}/sklad/hs/mobile/goods/`
const urlNotifications = `${url}/sklad/hs/mobile/notifications/`
const urlOrderCheck = `${url}/sklad/hs/mobile/orderCheck/`
const urlRejectOrder = `${url}/sklad/hs/mobile/reject_order/`
const urlConfirmation_sale = `${url}/sklad/hs/mobile/confirmation_sale/`
const urlSendOpinion = 'http://ifelse.corp.siyob.uz:9003/api/group_mailing/'
const urlOrderConfirmList = `${url}/sklad/hs/mobile/send_confirm_list/`
const urlOrderBalance = `${url}/sklad/hs/mobile/balance/`
const urlRate = `${url}/sklad/hs/mobile/get_rate/`
const urlOrder = `${url}/sklad/hs/mobile/order/`
const urlBalance = `${url}/sklad/hs/mobile/sverka/`
const urlBalanceDetail = `${url}/SiyobAgromash/hs/act_sverki_mobile/get?`;
const urlBalanceDetail_base64 = `${url}/SiyobAgromash/hs/act_sverki/get?`;
const urlBonusReport = `${url}/sklad/hs/mobile/bonus/`;
const urlBonusReport_base64 = `${url}/sklad/hs/report_bonus/`;
const urlDeficitList = `${url}/sklad/hs/mobile/deficit/`;


const username = "Программист"
const password = "1598753"

const username_sh = "Администратор"
const password_sh = "admin_sh"

const headers = {'Authorization': 'Basic '+ btoa(`${username}:${password}`) }
const basicAuth = "Basic " + btoa(`${username} + ":" + ${password}`)

module.exports = {
    urlLogin,
    urlReg,
    urlGoods,
    urlNotifications,
    urlOrderCheck,
    urlBalance,
    urlBalanceDetail,
    urlBalanceDetail_base64,
    urlBonusReport,
    urlBonusReport_base64,
    urlDeficitList,
    urlOrder,
    urlRejectOrder,
    urlConfirmation_sale,
    urlSendOpinion,
    urlConfirmation_sale,
    urlOrderConfirmList,
    urlOrderBalance,
    urlRate,
    basicAuth,
    headers,
    username,password,username_sh,password_sh
}