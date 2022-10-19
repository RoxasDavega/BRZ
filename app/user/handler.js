const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");

const { User } = require("../../models/User");
const {
  validateUserCreatePayload,
  validateUserUpdatePayload,
  validateUserLoginPayload,
  validateUserRegisterPayload,
} = require("../../validator/user");

module.exports = {
  handlerGetAllUser: async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.status(200).json({
        status: "success",
        message: "Get All Users",
        data: users,
      });
    } catch (error) {
      next(error);
    }
  },

  handlerRegisterUser: async (req, res, next) => {
    try {
      const { email, password, name, username, noHP, role } = req.body;
      validateUserRegisterPayload(req.body);
      const hashPassword = await bcrypt.hash(password, 10);
      await User.create({
        email,
        hashPassword,
        name,
        username,
        noHP,
        role,
      });

      return res.status(200).json({
        status: "success",
        message: "Successfully register",
        data: await User.findOne({
          attributes: { exclude: ["password", "createdAt", "updatedAt"] },
          order: [["createdAt", "Desc"]],
        }),
      });
    } catch (error) {
      next(error);
    }
  },

  handlerUpdateUser: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, username, email, password, noHP } = req.body;
      validateUserUpdatePayload(req.body);
      const user = await User.findByPk(id);
      await user.update({
        name,
        username,
        email,
        password,
        noHP,
      });
    } catch (error) {
      next(error);
    }
  },

  handlerDeleteUser: async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      await user.destroy();

      return res.status(200).json({
        status: "success",
        message: "Successfully delete user",
      });
    } catch (error) {
      next(error);
    }
  },

  handlerUserLogin: async (req, res, next) => {
    try {
        const { email, password } = req.body;
        validateUserLoginPayload(req.body);
        
        const user = await User.findOne({
            where: {
                email,
            }
        });

        if (!user) {
            throw new Error("Invalid email or password");
        }

        const passwordValidate = bcrypt.compareSync(password, user.password);
        if (!passwordValidate) {
            throw new Error("Invalid email or password");
        }

        const accessToken = generateAccessToken({
            id: user.id,
            name: user.name,
            role: user.role,
        });

        res.status(200).json({
            status: "success",
            message: "Successfully login",
            data: { user, accessToken },
        });

    } catch(error) {
        next(error);
    }
  }
};
