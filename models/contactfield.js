module.exports = (sequelize, type) => {
    return sequelize.define('contact_field', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        label: type.STRING,
        type_of_field: type.STRING, // eg. select, multi-select, text, checkbox, link
    })
}
