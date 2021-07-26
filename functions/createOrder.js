export const createOrder = async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET
    });

    const options = {
      amount: 50000, // amount in the smallest currency unit
      currency: "INR",
      receipt: "order_rcptid_11"
    };

    const order = await instance.orders.create();
    res.send(order);
  } catch (e) {
    console.log(e);
    res.status(403).send({ error: "Something went wrong" });
  }
});

// export.handler = async (event, context) => {
//   try {
//     const order = await instance.orders.create(options);
//     if (!order) return res.status(500).send("Some error occured");
//     res.json(order);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// }
