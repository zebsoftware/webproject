export const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  console.log("Received registration:", { name, email, password });

  res.json({ message: "Registration successful!" });

  
};
