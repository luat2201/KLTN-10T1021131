'use strict';
const image_TM = 'bit.ly/image_TM'
const image_thitbo = 'bit.ly/image_thitbo'
const image_thitheo = 'https://giadungducsaigon.vn/wp-content/uploads/2021/11/heo-den-iberico-5.png'
const image_canh = 'bit.ly/image_canh'
const image_com = 'bit.ly/image_com'
const image_khaivi = 'http://www.nhahangquangon.com/wp-content/uploads/2022/03/thuc-don-tiec1.jpg'
const image_lau = 'https://cdn.tgdd.vn/2021/06/CookProduct/Lau-cay-tu-xuyen.-1200x675.jpg'


module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Product', [
      {
        "title": "Món khai vị",
        "subtitle": "Các món khai vị, salad và kim chi",
        "image_url": image_khaivi,
        "payload": "KV"
      },
      {
        "title": "Thịt bò Mỹ",
        "subtitle": "Là loại bò Black Angus, một trong những giống bò nổi tiếng nhất ở Mỹ",
        "image_url": image_thitbo,
        "payload": "TBM"
      },
      {
        "title": "Thịt heo Tây Ban Nha",
        "subtitle": "Heo Iberico là một loại heo có nguồn gốc từ bán đảo Iberia Tây Ban Nha. Heo được chăn nuôi trong môi trường yêu cầu nghiêm ngặt về tất cả điều kiện chăm sóc và quy trình phân phối",
        "image_url": image_thitheo,
        "payload": "THTBN"
      },
      {
        "title": "Cơm",
        "image_url": image_com,
        "subtitle": "Có nhiều loại cơm để thưởng thức",
        "payload": "COM"
      },
      {
        "title": "Lẩu",
        "image_url": image_lau,
        "subtitle": "Các món lẫu đặc biệt gắn kết tình cảm gia đình",
        "payload": "LAU"
      },
      {
        "title": "Canh",
        "image_url": image_canh,
        "subtitle": "Có nhiều loại canh Hàn Quốc",
        "payload": "CANH"
      },
      {
        "title": "Món tráng miệng",
        "subtitle": "Các món tráng miệng đặc biệt chỉ có ở nhà hàng Mitsuki",
        "image_url": image_TM,
        "payload": "Mon_TM"
      },

    ], {});

  },


  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
