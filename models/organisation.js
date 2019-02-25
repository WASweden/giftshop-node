module.exports = (sequelize, type) => {
    return sequelize.define('organisation', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING
    })
}
