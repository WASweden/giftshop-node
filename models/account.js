module.exports = (sequelize, type) => {
    return sequelize.define('account', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING
    })
}
