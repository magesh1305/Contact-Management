const asyncHandler = require("express-async-handler");

//asyncHandler --> which handles all try catch blocks.

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res) => {
  // res.send("Get all contacts" );
  // res.json({ message: "Get all contacts" });
  res.status(200).json({ message: "Get all contacts" });
});

//@desc Create New contact
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req, res) => {
  console.log("This is create contact req", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({ message: "Create contact" });
});

//@desc get contact
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

//@desc update contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@desc delete contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
