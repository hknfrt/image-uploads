// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// module.exports = async (req, res) => {
//   try {
//     const { amount } = JSON.parse(req.body);

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: "usd",
//       payment_method_types: ["card"],
//     });

//     res.status(200).json({ paymentIntent });
//   } catch (error) {
//     console.error(error);

//     res.status(400).json({ error });
//   }
// };





require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};