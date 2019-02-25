const Sequelize = require('sequelize')
const OrganisationModel = require('./models/organisation')
const UserModel = require('./models/user')
const NoteModel = require('./models/note')
const ContactModel = require('./models/contact')
const AccountModel = require('./models/account')
const TodoModel = require('./models/todo')
const ContactFieldModel = require('./models/contactfield')
const ContactFieldValueModel = require('./models/contactfieldvalue')

const sequelize = new Sequelize('gavoshop', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Organisation = OrganisationModel(sequelize, Sequelize)
const User = UserModel(sequelize, Sequelize)
const Note = NoteModel(sequelize, Sequelize)
const Contact = ContactModel(sequelize, Sequelize)
const Account = AccountModel(sequelize, Sequelize)
const Todo = TodoModel(sequelize, Sequelize)
const ContactField = ContactFieldModel(sequelize, Sequelize)
const ContactFieldValue = ContactFieldValueModel(sequelize, Sequelize)

Organisation.hasMany(Account)
Organisation.hasMany(User)
Account.belongsTo(Organisation)
User.belongsTo(Organisation)

User.hasMany(Account)
User.hasMany(Contact)

Contact.hasMany(Note)
Contact.hasMany(Todo)
Contact.hasMany(ContactField)
Contact.hasMany(ContactFieldValue)
Note.belongsTo(Contact)
Todo.belongsTo(Contact)
ContactField.belongsTo(Contact)
ContactField.hasOne(ContactFieldValue)
ContactFieldValue.belongsTo(ContactField)
ContactFieldValue.belongsTo(Contact)

Account.hasMany(Note)
Account.hasMany(Todo)
Account.hasMany(Contact)
Account.belongsTo(User)
Note.belongsTo(Account)
Todo.belongsTo(Account)
Contact.belongsTo(Account)
Contact.belongsTo(User)
//
// sequelize.sync({ force: true })
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })

  module.exports = {
    Organisation,
    User,
    Note,
    Contact,
    Account,
    Todo,
    ContactField,
    ContactFieldValue
  }
