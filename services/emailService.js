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
    subject: "Cảm ơn bạn đã mua hàng !!!", // Subject line
    text: "Hello world?", // plain text body
    html: `<div><h2>Đặt hàng thành công</h2></div>
     <div>
       <p>Mã đơn hàng: ${orders._id}</p>
       <p>Tên khách hàng: ${orders.name}</p>
        <p>Số điện thoại: ${orders.phone}</p>
         <p>Địa chỉ: ${orders.address}</p>
       <p>Tổng tiền đơn hàng: ${parseInt(orders.total).toLocaleString("vi", {
         style: "currency",
         currency: "VND",
       })}</p>
     </div>`, // html body
  });
};

module.exports = sendEmail;
