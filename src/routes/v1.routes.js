const router = require('express').Router();

// Controllers
const UserController = require('../controllers/user-controller');

// Users router
router.route('/users')
  .get(UserController.listUsers)
  .post(UserController.createUser);

router.route('/users/:id')
  .get(UserController.getUserById)
  .put(UserController.setUser)
  .patch(UserController.updateUser)
  .delete(UserController.deleteUser);

module.exports = router;
