const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Role, UserRole } = require("../models");

const authController = {
  register: async (req, res) => {
    try {
      const { name, email, password, roleName } = req.body;

      const existingUser = await User.findOne({ where: { email } });
      if (existingUser)
        return res.status(400).json({ message: `Email already registered` });

      const hashedPwd = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        name,
        email,
        password: hashedPwd,
      });

      let role = await Role.findOne({ where: { name: roleName } });
      if (!role) {
        role = await Role.create({ name: roleName });
      }

      await UserRole.create({
        UserId: newUser.id,
        RoleId: role.id,
      });

      res.status(201).json({
        message: `User registered successfully`,
        user: { id: newUser.id, email: newUser.email, role: role.name },
      });
    } catch (err) {
      res.status(500).json({
        message: `Register failed`,
        error: err.message,
      });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        where: { email },
        include: [{ model: Role, through: { attributes: [] } }],
      });

      if (!user) return res.status(404).json({ message: "User not found" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ message: "Invalid credentials" });

      const userRole = user.Roles?.[0]?.name;

      const token = jwt.sign(
        { id: user.id, email: user.email, role: userRole },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.json({
        message: `Login success`,
        token,
        user: { id: user.id, email: user.email, role: userRole },
      });
    } catch (err) {
      res.status(500).json({
        message: `Login failed`,
        error: err.message,
      });
    }
  },
};

module.exports = authController;
