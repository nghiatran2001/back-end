const nodemailer = require("nodemailer");
const { Router } = require("express");
const dotenv = require("dotenv");
dotenv.config();

const sendEmail = async (orders) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.MAIL_ACCOUNT,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.MAIL_ACCOUNT, // sender address
    to: orders.email, // list of receivers
    subject: "CẢM ƠN QUÝ KHÁCH ĐÃ MUA HÀNG", // Subject line
    text: "Hello world?", // plain text body
    html: `
    <!DOCTYPE html>
      <html>
      <style>
        table, th, td {
          border:1px solid black;
        }
      </style>
      <body>
        <div><h3>Đặt hàng thành công</h3></div>
        <div >
        <table style="width:100%">
            <tr>
              <th>Mã đơn hàng</th>
              <th>Khách hàng</th>
              <th>Điện thoại</th>
              <th>Địa chỉ</th>
            
              <th>Tổng tiền</th>
            </tr>
            <tr>
              <td>${orders._id}</td>         
              <td>${orders.name}</td>           
              <td>${0}${orders.phone}</td>            
              <td>${orders.address}</td>            
                        
              <td>${parseInt(orders.total).toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}</td>
            </tr>
          </table>
          <h3>Chi tiết sản phẩm</h3>
          <p>${orders.order.map((e) => {
            if (e.disable === false) {
              return e.nameProduct;
            }
          })}</p>
        </div>
      </body>
      </html>
          
     `, // html body
  });
};

module.exports = sendEmail;
