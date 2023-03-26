const express = require('express');
const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require('../controllers/contactController');
const validationToken = require('../middleware/validateTokenHandler');
const router = express.Router();

router.use(validationToken);
router.route('/').post(createContact).get(getContacts);
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
