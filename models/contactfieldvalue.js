module.exports = (sequelize, type) => {
    return sequelize.define('contact_field_value', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        value: type.STRING
    })
}
