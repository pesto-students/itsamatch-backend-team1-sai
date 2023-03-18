
const stripe = require("stripe")('sk_test_fbj4mFHwBpJSFWsBy5di8MAH00XaugQ6kx'); // <-- change the key here


const createPayment = async (req, res) => {

  let status, error;
  const { token, amount } = req.body;
  try {
    await stripe.charges.create({
      source: token.id,
      amount,
      currency: 'inr',
    });
    status = 'success';
  } catch (error) {
    console.log(error);
    status = 'Failure';
  }
  res.json({ error, status });

};

export {
    createPayment
};
