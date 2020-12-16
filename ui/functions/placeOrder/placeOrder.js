const nodemailer = require('nodemailer');

const generateEmail = ({ order, total }) => {
  return `<div>
    <h2>Your recent order for ${total}</h2>
    <p>Please start walking over, we'll have your order ready in 20 minutes</>
    <ul>
      ${order.map(item => `<li>
        <img src="${item.thumbnail}" alt="${item.name}" />
        ${item.size} ${item.name} - ${item.price}
      </li>
      `).join()}
    </ul>
    <p>Your total is <strong>$${total}</strong> due at pickup</p>
    <style>
      ul {
        list-style: none;
      }
    </style>
    </div>
  `
}
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const wait = (ms = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  })
}

exports.handler = async (event, context) => {
  await wait(3000);
  const body = JSON.parse(event.body);
  const requiredFields = ['name', 'email', 'order'];
  for (const field of requiredFields) {
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: `You are missing ${field} field` })
      }
    }
  }
  if (!body.order.length) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: `You ordered nothing` })
    }
  }

  const info = await transporter.sendMail({
    from: `Slick's slices <slick@example.com>`,
    to: `${body.name} <${body.email}>, order@example.com`,
    subject: 'New order',
    html: generateEmail({ order: body.order, total: body.total }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify({message: 'Success'}),
  };
};
