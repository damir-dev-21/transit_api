const express = require('express')
const {
    login,
    reg,
    goods,
    notifications,
    orderCheck,
    orderConfirm,
    reject_order,
    sendOpinion,
    confirmList,
    balance,
    rate,
    order,
    sverka,
    act_sverki,
    act_sverki_mobile,
    act_sverki_base64,
    bonus,
    reportBonus,
    deficit
} = require('./auth.controller')
const authRouter = express.Router()

authRouter.post("/login", login)
authRouter.post("/reg", reg)
authRouter.get("/goods", goods)
authRouter.post("/notifications", notifications)
authRouter.post("/orderCheck", orderCheck)
authRouter.post("/confirmation_sale", orderConfirm)
authRouter.post("/reject_order", reject_order)
authRouter.post("/group_mailing", sendOpinion)
authRouter.post("/send_confirm_list", confirmList)
authRouter.post("/balance", balance)
authRouter.post("/get_rate", rate)
authRouter.post("/order", order)
authRouter.post("/sverka", sverka)
authRouter.post("/act_sverki", act_sverki)
authRouter.get("/act_sverki_mobile/get?", act_sverki_mobile)
authRouter.get("/act_sverki/get?", act_sverki_base64)
authRouter.post("/bonus", bonus)
authRouter.post("/report_bonus", reportBonus)
authRouter.get("/deficit", deficit)

module.exports = authRouter