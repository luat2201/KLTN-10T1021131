import request from "request"
require('dotenv').config();
import db from '../models/index'
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN


const image_bd = 'bit.ly/luat-bot1'
const image_menu = 'https://img.freepik.com/free-vector/modern-restaurant-menu-fast-food_52683-48982.jpg?w=2000'
const image_datban = 'https://cdn.tgdd.vn/2021/07/CookProduct/meolon-1200x676.jpg'
const image_khonggian = 'bit.ly/image_khonggian'

const image_TM = 'bit.ly/image_TM'
const image_thitbo = 'bit.ly/image_thitbo'
const image_thitheo = 'https://giadungducsaigon.vn/wp-content/uploads/2021/11/heo-den-iberico-5.png'
const image_canh = 'bit.ly/image_canh'
const image_com = 'bit.ly/image_com'

const image_khaivi = 'http://www.nhahangquangon.com/wp-content/uploads/2022/03/thuc-don-tiec1.jpg'
const image_lau = 'https://cdn.tgdd.vn/2021/06/CookProduct/Lau-cay-tu-xuyen.-1200x675.jpg'

const image_back = 'https://i0.wp.com/sctt.net.vn/wp-content/uploads/2021/08/win11_update_hero_2.jpg'

const image_kv1 = 'https://nhahangvanlocphat.vn/userfiles/files/up(2).jpg'
const image_kv1_1 = 'https://cdn.tgdd.vn/2020/06/CookRecipe/Avatar/goi-xoai-tom-thit-thumbnail.jpg'
const image_kv2 = 'https://www.lorca.vn/wp-content/uploads/2022/06/page-header.jpg'
const image_kv3 = 'https://cdn.tgdd.vn/2021/05/CookProduct/thumbbbbb-1200x676.jpg'
const image_kv4 = 'https://media.cooky.vn/recipe/g2/18978/s/recipe18978-prepare-step4-636228324332174917.jpg'

const image_bo1 = 'bit.ly/image_bo1'
const image_bo2 = 'https://www.thucphamsachhd.com/uploads/files/2021/05/19/than-noi-bo-my.jpg'
const image_bo3 = 'https://foodlife.com.vn/wp-content/uploads/2019/10/rip1.jpg'
const image_bo4 = 'https://kingbbq.vn/wp-content/uploads/2014/08/fzn_0370_ll1.jpg'
const image_bo5 = 'https://foodlife.com.vn/wp-content/uploads/2019/10/topblade2.jpg?v=1dff94b87514'
const image_bo6 = 'https://product.hstatic.net/200000469623/product/bc_cuon_6ee22b9bab9343c18a29ef94428dfbee_master.jpg'

const image_heo1 = 'https://cdn.tgdd.vn/2021/01/CookProduct/thum-1200x676-9.jpg'
const image_heo2 = 'https://cdn.tgdd.vn/Products/Images/8781/273477/bhx/suon-sun-heo-nhap-khau-1kg-202203021307237461.jpg'
const image_heo3 = 'https://haisandathanh.com/uploads/image/images/chang-dung-heo.jpg'
const image_heo4 = 'https://thitheonong.com/thumbs/1280x857x2/upload/baiviet/cach-lam-thit-heo-boc-sa-chien-gion-thom-ngon-khong-cuong-noi1-4778.jpg'
const image_heo5 = 'https://i.ytimg.com/vi/Q5V0uEkdTPg/maxresdefault.jpg'

const image_canh1 = 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Korean_stew-Kimchi_jjigae-01.jpg'
const image_canh2 = 'https://trivietphat.net/wp-content/uploads/2021/08/canh-kim-chi-thit-bo-1.jpg'
const image_canh3 = 'https://cookbeo.com/media/2020/06/724834785/canh-rong-bien-4x3.jpg'
const image_canh4 = 'https://cdn.tgdd.vn/2020/12/CookRecipe/Avatar/canh-rong-bien-thit-bo-dau-hu-thumbnail-1.jpg'
const image_canh5 = 'https://cdn.tgdd.vn/2021/05/CookProduct/thum-1200x676-13.jpg'

const image_com1 = 'https://amthuchailuaq3.com/upload/product/603005460842.jpg'
const image_com2 = 'http://bit.ly/cachuon1'
const image_com3 = 'https://www.rongbienhanquoc.net/Upload/601657513735.webp'
const image_com4 = 'https://bloganchoi.com/wp-content/uploads/2016/10/com-lam-dac-san-binh-phuoc-02-1024x768.jpg'

const image_tm1 = 'https://dvpmarket.com/resources/uploads/images/2018/04/Banh-chocolate-ganache-sanh-min-hap-dan.jpg'
const image_tm2 = 'https://cdn.tgdd.vn/2021/03/CookRecipe/Avatar/banh-pho-mai-nuong-dua-thumbnail.jpg'
const image_tm3 = 'https://cdn.tgdd.vn/2021/03/CookProduct/thumb1-1200x676-18.jpg'
const image_tm4 = 'https://cdn.tgdd.vn/2021/04/CookProduct/pug1-1200x676.jpg'
const image_tm5 = 'https://cdn.tgdd.vn/2020/08/CookProduct/Webp.net-resizeimage(28)-1200x676.jpg'
const image_tm6 = 'https://mevacon.giaoduc.edu.vn/wp-content/uploads/2021/10/cach-lam-banh-pie-tao-4.jpg'
const image_tm7 = 'https://cdn.tgdd.vn/2020/12/CookProduct/cach-lam-banh-kem-dau-tay1200-1200x676.jpg'

const image_lau1 = 'https://cookbeo.com/media/2020/09/lau-thai-thap-cam/lau-thai-thap-cam.jpg'
const image_lau2 = 'http://cdn.tgdd.vn/Files/2021/02/25/1330480/tong-hop-5-cach-nau-lau-hai-san-thom-ngon-tai-nha-202206031654454333.jpg'
const image_lau3 = 'https://sieungon.com/wp-content/uploads/2017/11/mon-lau-ga-la-giang-1.jpg'

const image_rooms = 'https://media.cntraveler.com/photos/5a60e3ff2630ac19f54baf1f/16:9/w_2560,c_limit/Farmshop_2018FarmshopLA_0535---Dining-Room-no-Kitchen.jpg'



let callSendAPI = (sender_psid, response) => {
    return new Promise(async (resolve, reject) => {
        try {
            let request_body = {
                "recipient": {
                    "id": sender_psid
                },
                "message": response
            }

            await sendMarkSeen(sender_psid)
            await sendTypingOn(sender_psid)

            // Send the HTTP request to the Messenger Platform
            request({
                "uri": "https://graph.facebook.com/v16.0/me/messages",
                "qs": { "access_token": PAGE_ACCESS_TOKEN },
                "method": "POST",
                "json": request_body
            }, (err, res, body) => {
                console.log("--------------------")
                console.log(body)
                console.log("--------------------")
                if (!err) {
                    resolve('message sent!')
                } else {
                    console.error("Unable to send message:" + err);
                }
            });
        } catch (e) {
            reject(e)
        }
    })
}

let sendTypingOn = (sender_psid) => {
    let request_body = {
        "recipient": {
            "id": sender_psid
        },
        "sender_action": "typing_on"
    }

    // Send the HTTP request to the Messenger Platform
    request({
        "uri": "https://graph.facebook.com/v16.0/me/messages",
        "qs": { "access_token": PAGE_ACCESS_TOKEN },
        "method": "POST",
        "json": request_body
    }, (err, res, body) => {
        if (!err) {
            console.log('sendTypingOn sent!')
        } else {
            console.error("Unable to send sendTypingOn:" + err);
        }
    });
}

let sendMarkSeen = (sender_psid) => {
    let request_body = {
        "recipient": {
            "id": sender_psid
        },
        "sender_action": "mark_seen"
    }

    // Send the HTTP request to the Messenger Platform
    request({
        "uri": "https://graph.facebook.com/v16.0/me/messages",
        "qs": { "access_token": PAGE_ACCESS_TOKEN },
        "method": "POST",
        "json": request_body
    }, (err, res, body) => {
        if (!err) {
            console.log('sendTypingOn sent!')
        } else {
            console.error("Unable to send sendTypingOn:" + err);
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
            let response2 = getStartedTemplate(sender_psid)
            //send generic template message
            await callSendAPI(sender_psid, response2)

            // let response3 = getStartedQuickReplyTemplate()
            // await callSendAPI(sender_psid, response3)
            resolve('done');
        } catch (e) {
            reject(e)
        }
    })
}

let getStartedTemplate = (senderID) => {
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
                            "type": "web_url",
                            "url": `${process.env.URL_WEB_VIEW_ORDER}/${senderID}`,
                            "title": "Đặt bàn",
                            "webview_height_ratio": "tall",
                            "messenger_extensions": true
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


let handleSendMainMenu = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response1 = getMainMenuTemplate(sender_psid)
            await callSendAPI(sender_psid, response1)
            resolve('done');
        } catch (e) {
            reject(e)
        }
    })
}

let getMainMenuTemplate = (senderID) => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "Menu của nhà hàng",
                        "subtitle": "Thực đơn cho bữa trưa và bữa tối.",
                        "image_url": image_menu,
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Bữa trưa",
                                "payload": "LUNCH_MENU",
                            },
                            {
                                "type": "postback",
                                "title": "Bữa tối",
                                "payload": "DINNER_MENU",
                            }
                        ],
                    },
                    {
                        "title": "Giờ mở cửa",
                        "subtitle": "Thứ 2 - Thứ 6: 12h-22h | Thứ 7 - Chủ nhật: 10h-23h",
                        "image_url": image_datban,
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": `${process.env.URL_WEB_VIEW_ORDER}/${senderID}`,
                                "title": "Đặt bàn",
                                "webview_height_ratio": "tall",
                                "messenger_extensions": true
                            }
                        ],
                    },
                    {
                        "title": "Không gian nhà hàng",
                        "subtitle": "Nhà hàng có sức chứa lên đến 500 người và có thể phục vụ trong các tiệc lớn như đám cưới, sinh nhật, liên hoan,....",
                        "image_url": image_khonggian,
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Chi tiết",
                                "payload": "SHOW_ROOMS",
                            }
                        ],
                    }
                ]
            }
        }
    }
    return response
}

let handleSendLunchMenu = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response1 = await getLunchMenuTemplate(sender_psid)
            await callSendAPI(sender_psid, response1)
            resolve('done');
        } catch (e) {
            reject(e)
        }
    })
}


let getLunchMenuTemplate = async (senderID) => {

    let data = await db.Product.findAll({
        raw: true
    })

    let elements = [];
    if (data && data.length > 0) {
        data.map(item => {
            elements.push({
                "title": item.title,
                "subtitle": item.subtitle,
                "image_url": item.image_url,
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Xem chi tiết",
                        "payload": item.payload,
                    }
                ],
            })
        })
    }


    elements.push({
        "title": "Back",
        "subtitle": "Quay trở lại Menu chính",
        "image_url": image_back,
        "buttons": [
            {
                "type": "postback",
                "title": "Quay trở lại Menu chính",
                "payload": "BACK",
            },
            {
                "type": "web_url",
                "url": `${process.env.URL_WEB_VIEW_ORDER}/${senderID}`,
                "title": "Đặt bàn",
                "webview_height_ratio": "tall",
                "messenger_extensions": true
            }
        ],
    })


    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": []
            }
        }
    }

    response.attachment.payload.elements = elements

    return response
}

let handlleSendDinnerMenu = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response1 = getDinnerMenuTemplate(sender_psid)
            await callSendAPI(sender_psid, response1)
            resolve('done');
        } catch (e) {
            reject(e)
        }
    })
}

let getDinnerMenuTemplate = (senderID) => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "Món khai vị",
                        "subtitle": "Các món khai vị, salad và kim chi",
                        "image_url": image_khaivi,
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Xem chi tiết",
                                "payload": "KV",
                            }
                        ],
                    },
                    {
                        "title": "Thịt bò Mỹ",
                        "subtitle": "Là loại bò Black Angus, một trong những giống bò nổi tiếng nhất ở Mỹ",
                        "image_url": image_thitbo,
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Xem chi tiết",
                                "payload": "TBM",
                            }
                        ],
                    },
                    {
                        "title": "Thịt heo Tây Ban Nha",
                        "subtitle": "Heo Iberico là một loại heo có nguồn gốc từ bán đảo Iberia Tây Ban Nha. Heo được chăn nuôi trong môi trường yêu cầu nghiêm ngặt về tất cả điều kiện chăm sóc và quy trình phân phối",
                        "image_url": image_thitheo,
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Xem chi tiết",
                                "payload": "THTBN",
                            }
                        ],
                    },
                    {
                        "title": "Cơm",
                        "image_url": image_com,
                        "subtitle": "Có nhiều loại cơm để thưởng thức",
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Xem chi tiết",
                                "payload": "COM",
                            }
                        ],
                    },
                    {
                        "title": "Lẩu",
                        "image_url": image_lau,
                        "subtitle": "Các món lẫu đặc biệt gắn kết tình cảm gia đình",
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Xem chi tiết",
                                "payload": "LAU",
                            }
                        ],
                    },
                    {
                        "title": "Canh",
                        "image_url": image_canh,
                        "subtitle": "Có nhiều loại canh Hàn Quốc",
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Xem chi tiết",
                                "payload": "CANH",
                            }
                        ],
                    },
                    {
                        "title": "Món tráng miệng",
                        "subtitle": "Các món tráng miệng đặc biệt chỉ có ở nhà hàng Mitsuki",
                        "image_url": image_TM,
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Xem chi tiết",
                                "payload": "Mon_TM",
                            }
                        ],
                    },
                    {
                        "title": "Back",
                        "subtitle": "Quay trở lại Menu chính",
                        "image_url": image_back,
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Quay trở lại Menu chính",
                                "payload": "BACK",
                            },
                            {
                                "type": "web_url",
                                "url": `${process.env.URL_WEB_VIEW_ORDER}/${senderID}`,
                                "title": "Đặt bàn",
                                "webview_height_ratio": "tall",
                                "messenger_extensions": true
                            }
                        ],
                    }

                ]
            }
        }
    }
    return response
}

let handleBackToMainMenu = async (sender_psid) => {
    await handleSendMainMenu(sender_psid)
}

let handleViewKV = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {

            let response = gethandleViewKV(sender_psid)
            await callSendAPI(sender_psid, response)


            resolve('done')
        } catch (e) {
            reject(e)
        }
    })
}

let gethandleViewKV = (senderID) => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements":
                    [
                        {
                            "title": "Gỏi thịt thăn",
                            "subtitle": "Giá 150k",
                            "image_url": image_kv1,
                        },
                        {
                            "title": "Gỏi tôm thịt",
                            "subtitle": "Giá 150k",
                            "image_url": image_kv1_1,
                        },
                        {
                            "title": "Kim chi",
                            "subtitle": "Kim chi Hàn Quốc: 38k",
                            "image_url": image_kv2,
                        },
                        {
                            "title": "Panchan dưa leo",
                            "subtitle": "Giá 38k",
                            "image_url": image_kv3,
                        },
                        {
                            "title": "Salad tôm",
                            "subtitle": "Giá 100k",
                            "image_url": image_kv4,
                        },
                        {
                            "title": "Back",
                            "subtitle": "Quay trở lại Menu chính",
                            "image_url": image_back,
                            "buttons": [
                                {
                                    "type": "postback",
                                    "title": "Quay trở lại Menu chính",
                                    "payload": "BACK",
                                },
                                {
                                    "type": "web_url",
                                    "url": `${process.env.URL_WEB_VIEW_ORDER}/${senderID}`,
                                    "title": "Đặt bàn",
                                    "webview_height_ratio": "tall",
                                    "messenger_extensions": true
                                }
                            ],
                        }
                    ]
            }
        }
    }
    return response
}

let handleViewTBM = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {

            let response = gethandleViewTBM(sender_psid)
            await callSendAPI(sender_psid, response)


            resolve('done')
        } catch (e) {
            reject(e)
        }
    })
}


let gethandleViewTBM = (senderID) => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements":
                    [
                        {
                            "title": "Thăn ngoại bò Mỹ nướng",
                            "subtitle": "Giá 118k",
                            "image_url": image_bo1,
                        },
                        {
                            "title": "Thăn nội bò Mỹ nướng",
                            "subtitle": "Giá 118k",
                            "image_url": image_bo2,
                        },
                        {
                            "title": "Thịt dẻ sườn bò Mỹ nướng",
                            "subtitle": "Giá 118k",
                            "image_url": image_bo3,
                        },
                        {
                            "title": "Bò ba chỉ cuốn nấm nướng",
                            "subtitle": "Giá 118k",
                            "image_url": image_bo4,
                        },
                        {
                            "title": "Lõi nạc vai bò nướng",
                            "subtitle": "Giá 118k",
                            "image_url": image_bo5,
                        },
                        {
                            "title": "Ba chỉ bò Mỹ nướng",
                            "subtitle": "Giá 108k",
                            "image_url": image_bo6,
                        },
                        {
                            "title": "Back",
                            "subtitle": "Quay trở lại Menu chính",
                            "image_url": image_back,
                            "buttons": [
                                {
                                    "type": "postback",
                                    "title": "Quay trở lại Menu chính",
                                    "payload": "BACK",
                                },
                                {
                                    "type": "web_url",
                                    "url": `${process.env.URL_WEB_VIEW_ORDER}/${senderID}`,
                                    "title": "Đặt bàn",
                                    "webview_height_ratio": "tall",
                                    "messenger_extensions": true
                                }
                            ],
                        }
                    ]
            }
        }
    }
    return response
}

let handleViewTHTBN = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {

            let response = gethandleViewTHTBN(sender_psid)
            await callSendAPI(sender_psid, response)


            resolve('done')
        } catch (e) {
            reject(e)
        }
    })
}

let gethandleViewTHTBN = (senderID) => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements":
                    [
                        {
                            "title": "Ba chỉ heo nướng",
                            "subtitle": "Giá 89k",
                            "image_url": image_heo1,
                        },
                        {
                            "title": "Sụn heo nướng",
                            "subtitle": "Giá 89k",
                            "image_url": image_heo2,
                        },
                        {
                            "title": "Diềm heo nướng",
                            "subtitle": "Giá 89k ",
                            "image_url": image_heo3,
                        },
                        {
                            "title": "Thịt heo bọc xã chiên giòn",
                            "subtitle": "Giá 100k",
                            "image_url": image_heo4,
                        },
                        {
                            "title": "Thịt kho tàu",
                            "subtitle": "Giá 80k",
                            "image_url": image_heo5,
                        },
                        {
                            "title": "Back",
                            "subtitle": "Quay trở lại Menu chính",
                            "image_url": image_back,
                            "buttons": [
                                {
                                    "type": "postback",
                                    "title": "Quay trở lại Menu chính",
                                    "payload": "BACK",
                                },
                                {
                                    "type": "web_url",
                                    "url": `${process.env.URL_WEB_VIEW_ORDER}/${senderID}`,
                                    "title": "Đặt bàn",
                                    "webview_height_ratio": "tall",
                                    "messenger_extensions": true
                                }
                            ],
                        }
                    ]
            }
        }
    }
    return response
}

let handleViewCANH = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {

            let response = gethandleViewCANH(sender_psid)
            await callSendAPI(sender_psid, response)


            resolve('done')
        } catch (e) {
            reject(e)
        }
    })
}

let gethandleViewCANH = (senderID) => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements":
                    [
                        {
                            "title": "Canh kim chi thường",
                            "subtitle": "Giá 58k",
                            "image_url": image_canh1,
                        },
                        {
                            "title": "Canh kim chi bò",
                            "subtitle": "Giá 68k",
                            "image_url": image_canh2,
                        },
                        {
                            "title": "Canh rong biển truyền thống",
                            "subtitle": "Giá 58k ",
                            "image_url": image_canh3,
                        },
                        {
                            "title": "Canh rong biển bò",
                            "subtitle": "Giá 68k",
                            "image_url": image_canh4,
                        },
                        {
                            "title": "Canh rong biển hải sản",
                            "subtitle": "Giá 68k",
                            "image_url": image_canh5,
                        },
                        {
                            "title": "Back",
                            "subtitle": "Quay trở lại Menu chính",
                            "image_url": image_back,
                            "buttons": [
                                {
                                    "type": "postback",
                                    "title": "Quay trở lại Menu chính",
                                    "payload": "BACK",
                                },
                                {
                                    "type": "web_url",
                                    "url": `${process.env.URL_WEB_VIEW_ORDER}/${senderID}`,
                                    "title": "Đặt bàn",
                                    "webview_height_ratio": "tall",
                                    "messenger_extensions": true
                                }
                            ],
                        }
                    ]
            }
        }
    }
    return response
}

let handleViewCOM = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {

            let response = gethandleViewCOM(sender_psid)
            await callSendAPI(sender_psid, response)


            resolve('done')
        } catch (e) {
            reject(e)
        }
    })
}

let gethandleViewCOM = (senderID) => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements":
                    [
                        {
                            "title": "Cơm chiên hải sản",
                            "subtitle": "Giá 68k",
                            "image_url": image_com1,
                        },
                        {
                            "title": "Cơm chiên trứng cá chuồn",
                            "subtitle": "Giá 68k",
                            "image_url": image_com2,
                        },
                        {
                            "title": "Cơm cuộn truyền thống",
                            "subtitle": "Giá 38k ",
                            "image_url": image_com3,
                        },
                        {
                            "title": "Cơm lam",
                            "subtitle": "Giá 50k",
                            "image_url": image_com4,
                        },
                        {
                            "title": "Back",
                            "subtitle": "Quay trở lại Menu chính",
                            "image_url": image_back,
                            "buttons": [
                                {
                                    "type": "postback",
                                    "title": "Quay trở lại Menu chính",
                                    "payload": "BACK",
                                },
                                {
                                    "type": "web_url",
                                    "url": `${process.env.URL_WEB_VIEW_ORDER}/${senderID}`,
                                    "title": "Đặt bàn",
                                    "webview_height_ratio": "tall",
                                    "messenger_extensions": true
                                }
                            ],
                        }
                    ]
            }
        }
    }
    return response
}

let handleViewLAU = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {

            let response = gethandleViewLAU(sender_psid)
            await callSendAPI(sender_psid, response)


            resolve('done')
        } catch (e) {
            reject(e)
        }
    })
}

let gethandleViewLAU = (senderID) => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements":
                    [
                        {
                            "title": "Lẫu Thái",
                            "subtitle": "Giá 299k",
                            "image_url": image_lau1,
                        },
                        {
                            "title": "Lẫu hải sản",
                            "subtitle": "Giá 299k",
                            "image_url": image_lau2,
                        },
                        {
                            "title": "Lẫu gà lá giang",
                            "subtitle": "Giá 350k",
                            "image_url": image_lau3,
                        },
                        {
                            "title": "Back",
                            "subtitle": "Quay trở lại Menu chính",
                            "image_url": image_back,
                            "buttons": [
                                {
                                    "type": "postback",
                                    "title": "Quay trở lại Menu chính",
                                    "payload": "BACK",
                                },
                                {
                                    "type": "web_url",
                                    "url": `${process.env.URL_WEB_VIEW_ORDER}/${senderID}`,
                                    "title": "Đặt bàn",
                                    "webview_height_ratio": "tall",
                                    "messenger_extensions": true
                                }
                            ],
                        }
                    ]
            }
        }
    }
    return response
}

let handleViewMon_TM = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {

            let response = gethandleViewMon_TM(sender_psid)
            await callSendAPI(sender_psid, response)


            resolve('done')
        } catch (e) {
            reject(e)
        }
    })
}

let gethandleViewMon_TM = (senderID) => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements":
                    [
                        {
                            "title": "Bánh kem socola",
                            "subtitle": "Giá 50k",
                            "image_url": image_tm1,
                        },
                        {
                            "title": "Bánh phô mai",
                            "subtitle": "Giá 50k",
                            "image_url": image_tm2,
                        },
                        {
                            "title": "Bánh trứng phồng",
                            "subtitle": "Giá 50k ",
                            "image_url": image_tm3,
                        },
                        {
                            "title": "Bánh mềm pudding",
                            "subtitle": "Giá 50k",
                            "image_url": image_tm4,
                        },
                        {
                            "title": "Bánh tart chanh",
                            "subtitle": "Giá 50k",
                            "image_url": image_tm5,
                        },
                        {
                            "title": "Bánh nướng táo",
                            "subtitle": "Giá 50k",
                            "image_url": image_tm6,
                        },
                        {
                            "title": "Bánh kem dâu",
                            "subtitle": "Giá 50k",
                            "image_url": image_tm7,
                        },
                        {
                            "title": "Back",
                            "subtitle": "Quay trở lại Menu chính",
                            "image_url": image_back,
                            "buttons": [
                                {
                                    "type": "postback",
                                    "title": "Quay trở lại Menu chính",
                                    "payload": "BACK",
                                },
                                {
                                    "type": "web_url",
                                    "url": `${process.env.URL_WEB_VIEW_ORDER}/${senderID}`,
                                    "title": "Đặt bàn",
                                    "webview_height_ratio": "tall",
                                    "messenger_extensions": true
                                }
                            ],
                        }
                    ]
            }
        }
    }
    return response
}

let getImageRoomsTemplates = () => {
    let response = {
        "attachment": {
            "type": "image",
            "payload": {
                "url": image_rooms,
                "is_reusable": true
            }
        }
    }
    return response
}

let getButtonRoomsTemplates = (senderID) => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "Nhà hàng có thể phục vụ tối đa 500 khách",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Menu",
                        "payload": "Main_menu",
                    },
                    {
                        "type": "web_url",
                        "url": `${process.env.URL_WEB_VIEW_ORDER}/${senderID}`,
                        "title": "Đặt bàn",
                        "webview_height_ratio": "tall",
                        "messenger_extensions": true
                    }
                ]
            }
        }
    }
    return response
}

let handleShowDetailRooms = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            //send an image
            let response1 = getImageRoomsTemplates(sender_psid)

            //send a button templates: text, button
            let response2 = getButtonRoomsTemplates(sender_psid)

            await callSendAPI(sender_psid, response1)
            await callSendAPI(sender_psid, response2)

            resolve('done')
        } catch (e) {
            reject(e)
        }
    })
}

let handleHD = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            //send text
            let username = await getUserName(sender_psid)
            let response1 = { "text": `Xin chào ${username}, mình là chatbbot của nhà hàng Luffy. Mọi thông tin và cách sử dụng chatbot bạn hãy xem video bên dưới❤️❤️❤️` }

            //send a button templates: video, button
            let response2 = getBotMediaTemplate(sender_psid)

            await callSendAPI(sender_psid, response1)
            await callSendAPI(sender_psid, response2)

            resolve('done')
        } catch (e) {
            reject(e)
        }
    })
}

let getBotMediaTemplate = () => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "media",
                "elements": [
                    {
                        "media_type": "video",
                        "url": "https://www.facebook.com/100092235139972/videos/1030041295070215",
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Menu chính",
                                "payload": "Main_menu",
                            }
                        ]
                    }
                ]
            }
        }
    }
    return response
}

module.exports = {
    handleGetStarted: handleGetStarted,
    handleSendMainMenu: handleSendMainMenu,
    handleSendLunchMenu: handleSendLunchMenu,
    handlleSendDinnerMenu: handlleSendDinnerMenu,
    handleBackToMainMenu: handleBackToMainMenu,
    handleViewKV: handleViewKV,
    handleViewTBM: handleViewTBM,
    handleViewTHTBN: handleViewTHTBN,
    handleViewCANH: handleViewCANH,
    handleViewCOM: handleViewCOM,
    handleViewLAU: handleViewLAU,
    handleViewMon_TM: handleViewMon_TM,
    handleShowDetailRooms: handleShowDetailRooms,
    callSendAPI: callSendAPI,
    handleHD: handleHD,
    getLunchMenuTemplate: getLunchMenuTemplate,
}