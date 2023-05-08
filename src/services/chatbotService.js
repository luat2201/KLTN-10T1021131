import request from "request"
require('dotenv').config();
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN


const image_bd = 'bit.ly/luat-bot1'

let callSendAPI = (sender_psid, response) => {
    // Construct the message body
    let request_body = {
        "recipient": {
            "id": sender_psid
        },
        "message": response
    }

    // Send the HTTP request to the Messenger Platform
    request({
        "uri": "https://graph.facebook.com/v16.0/me/messages",
        "qs": { "access_token": PAGE_ACCESS_TOKEN },
        "method": "POST",
        "json": request_body
    }, (err, res, body) => {
        if (!err) {
            console.log('message sent!')
        } else {
            console.error("Unable to send message:" + err);
        }
    });
}

let getUserName = (sender_psid) => {
    return new Promise((resolve, reject) => {
        request({
            "uri": `https://graph.facebook.com/${sender_psid}?fields=first_name,last_name,profile_pic&access_token=${PAGE_ACCESS_TOKEN}`,
            "qs": { "access_token": PAGE_ACCESS_TOKEN },
            "method": "GET"
        }, (err, res, body) => {
            console.log(body)
            if (!err) {
                body = JSON.parse(body);
                let username = `${body.first_name} ${body.last_name}`
                resolve(username)
            } else {
                console.error("Unable to send message:" + err);
                reject(err)
            }
        });
    })
}

let handleGetStarted = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let username = await getUserName(sender_psid)
            let response1 = { "text": `Xin chào mừng ${username} đến với nhà hàng Luffy` }

            //send text message
            await callSendAPI(sender_psid, response1)

            let response2 = sendGetStartedTemplate()

            //send generic template message
            await callSendAPI(sender_psid, response2)
            resolve('done');
        } catch (e) {
            reject(e)
        }
    })
}

let sendGetStartedTemplate = () => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Nhà hàng Luffy",
                    "subtitle": "Dưới đây là các nút mà bạn có thể lựa chọn!",
                    "image_url": image_bd,
                    "buttons": [
                        {
                            "type": "postback",
                            "title": "Menu",
                            "payload": "Main_menu",
                        },
                        {
                            "type": "postback",
                            "title": "Đặt bàn",
                            "payload": "DB"
                        },
                        {
                            "type": "postback",
                            "title": "Hướng dẫn sử dụng bot",
                            "payload": "HD",
                        }
                    ],
                }]
            }
        }
    }
    return response
}

module.exports = {
    handleGetStarted: handleGetStarted,

}