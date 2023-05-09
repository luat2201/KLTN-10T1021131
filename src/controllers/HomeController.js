require('dotenv').config();
import request from "request";
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN
import chatbotService from "../services/chatbotService"
import { response } from "express";
//process.env.NAME_VARIABLES
let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
};

let postWebhook = (req, res) => {
    let body = req.body;

    // Checks this is an event from a page subscription
    if (body.object === 'page') {

        // Iterates over each entry - there may be multiple if batched
        body.entry.forEach(function (entry) {

            // Gets the body of the webhook event
            let webhook_event = entry.messaging[0];
            console.log(webhook_event);


            // Get the sender PSID
            let sender_psid = webhook_event.sender.id;
            console.log('Sender PSID: ' + sender_psid);

            // Check if the event is a message or postback and
            // pass the event to the appropriate handler function
            if (webhook_event.message) {
                handleMessage(sender_psid, webhook_event.message);
            } else if (webhook_event.postback) {
                handlePostback(sender_psid, webhook_event.postback);
            }
        });

        // Returns a '200 OK' response to all requests
        res.status(200).send('EVENT_RECEIVED');
    } else {
        // Returns a '404 Not Found' if event is not from a page subscription
        res.sendStatus(404);
    }
}

let getWebhook = (req, res) => {

    // Your verify token. Should be a random string.
    let VERIFY_TOKEN = process.env.VERIFY_TOKEN;

    // Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

    // Checks if a token and mode is in the query string of the request
    if (mode && token) {

        // Checks the mode and token sent is correct
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {

            // Responds with the challenge token from the request
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);

        } else {
            // Responds with '403 Forbidden' if verify tokens do not match
            res.sendStatus(403);
        }
    }
}

// Handles messages events
function handleMessage(sender_psid, received_message) {

    let response;

    // Checks if the message contains text
    if (received_message.text) {
        // Create the payload for a basic text message, which
        // will be added to the body of our request to the Send API
        response = {
            "text": `You sent the message: "${received_message.text}". Now send me an attachment!`
        }
    } else if (received_message.attachments) {
        // Get the URL of the message attachment
        let attachment_url = received_message.attachments[0].payload.url;
        response = {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "elements": [{
                        "title": "Is this the right picture?",
                        "subtitle": "Tap a button to answer.",
                        "image_url": attachment_url,
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Yes!",
                                "payload": "yes",
                            },
                            {
                                "type": "postback",
                                "title": "No!",
                                "payload": "no",
                            }
                        ],
                    }]
                }
            }
        }
    }

    // Send the response message
    callSendAPI(sender_psid, response);
}

// Handles messaging_postbacks events
async function handlePostback(sender_psid, received_postback) {
    let response;

    // Get the payload for the postback
    let payload = received_postback.payload;

    switch (payload) {
        case 'yes':
            response = { "text": "Thanks!" }
            break;
        case 'no':
            response = { "text": "Oops, try sending another image." }
            break;

        case 'BACK':
        case 'GET_STARTED':
            await chatbotService.handleGetStarted(sender_psid)
            break;

        case 'Main_menu':
            await chatbotService.handleSendMainMenu(sender_psid)
            break;

        case 'LUNCH_MENU':
            await chatbotService.handleSendLunchMenu(sender_psid)
            break
        case 'DINNER_MENU':
            await chatbotService.handlleSendDinnerMenu(sender_psid)
            break
        case 'KV':
            await chatbotService.handleViewKV(sender_psid)
            break;
        case 'TBM':
            await chatbotService.handleViewTBM(sender_psid)
            break;
        case 'THTBN':
            await chatbotService.handleViewTHTBN(sender_psid)
            break;
        case 'CANH':
            await chatbotService.handleViewCANH(sender_psid)
            break;
        case 'COM':
            await chatbotService.handleViewCOM(sender_psid)
            break;
        case 'LAU':
            await chatbotService.handleViewLAU(sender_psid)
            break
        case 'Mon_TM':
            await chatbotService.handleViewMon_TM(sender_psid)
            break
        case 'BACK':
            await chatbotService.handleBackToMainMenu(sender_psid)
            break;
        case 'SHOW_ROOMS':
            await chatbotService.handleShowDetailRooms(sender_psid)
            break

        default:
            response = { "text": `Tôi không yêu cầu ${payload} của bạn` }
    }
    callSendAPI(sender_psid, response);
}

// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {
    // Construct the message body
    let request_body = {
        "recipient": {
            "id": sender_psid
        },
        "message": response
    }

    // Send the HTTP request to the Messenger Platform
    request({
        "uri": "https://graph.facebook.com/v2.6/me/messages",
        "qs": { "access_token": process.env.PAGE_ACCESS_TOKEN },
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

let setupProfile = async (req, res) => {
    //call profile facebook api
    let request_body = {
        "get_started": { "payload": "GET_STARTED" },
        "whitelisted_domains": ["https://chatbot-luffy.herokuapp.com/"],

    }

    // Send the HTTP request to the Messenger Platform
    await request({
        "uri": `https://graph.facebook.com/v16.0/me/messenger_profile?access_token=${PAGE_ACCESS_TOKEN}`,
        "qs": { "access_token": PAGE_ACCESS_TOKEN },
        "method": "POST",
        "json": request_body
    }, (err, res, body) => {
        console.log(body)
        if (!err) {
            console.log('setup user profile succeeds!')
        } else {
            console.error("Unable to user profile:" + err);
        }
    });

    return res.send("setup user profile succeeds!")
}


let setupPersistentMenu = async (req, res) => {
    //call profile facebook api
    let request_body = {
        "persistent_menu": [
            {
                "locale": "default",
                "composer_input_disabled": false,
                "call_to_actions": [
                    {
                        "type": "postback",
                        "title": "Restart bot",
                        "payload": "BACK"
                    },
                    {
                        "type": "web_url",
                        "title": "Trang chủ Facebook",
                        "url": "https://www.facebook.com/profile.php?id=100092235139972",
                        "webview_height_ratio": "full"
                    }
                ]
            }
        ]
    }

    // Send the HTTP request to the Messenger Platform
    await request({
        "uri": `https://graph.facebook.com/v16.0/me/messenger_profile?access_token=${PAGE_ACCESS_TOKEN}`,
        "qs": { "access_token": PAGE_ACCESS_TOKEN },
        "method": "POST",
        "json": request_body
    }, (err, res, body) => {
        console.log(body)
        if (!err) {
            console.log('setup Persistent Menu succeeds!')
        } else {
            console.error("Unable to Persistent Menu:" + err);
        }
    });

    return res.send("setup Persistent Menu succeeds!")
}

let handleReserveTable = (req, res) => {
    return res.render('reserve-table.ejs')
}

let handlePostReserveTable = async (req, res) => {
    try {
        let username = await chatbotService.getUserName(req.body.psid);

        let data = {
            username: username,
            email: req.body.email,
            phoneNumber: `'${req.body.phoneNumber}`,
            customerName: req.body.customerName,
            dateDB: req.body.dateDB,
            hourDB: req.body.hourDB,
            manyPeople: req.body.manyPeople

        }
        await writeDataToGoogleSheet(data)

        let customerName = "";
        if (req.body.customerName === "") {
            customerName = username
        } else customerName = req.body.customerName;
        let response1 = {
            "text": `---Thông tin khách hàng---
            \nHọ và tên: ${customerName}
            \nĐịa chỉ Email: ${req.body.email}
            \nSố điện thoại: ${req.body.phoneNumber}
            \nNgày đặt bàn: ${req.body.dateDB}
            \nGiờ đặt bàn: ${req.body.hourDB}
            \nSố người: ${req.body.manyPeople}
            `
        }
        await chatbotService.callSendAPI(req.body.psid, response1)
        return res.status(200).json({
            message: "ok"
        });
    } catch (e) {
        console.log('Lỗi post reserve table: ', e)
        return res.status(500).json({
            message: "Server error"
        });
    }
}

module.exports = {
    getHomePage: getHomePage,
    postWebhook: postWebhook,
    getWebhook: getWebhook,
    setupProfile: setupProfile,
    setupPersistentMenu: setupPersistentMenu,
    handleReserveTable: handleReserveTable,
    handlePostReserveTable: handlePostReserveTable
}