

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  console.log("Received login request:", { email, password });


  res.json({ message: "Login successful!" });


};
