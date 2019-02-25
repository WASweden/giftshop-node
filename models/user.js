module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        first_name: type.STRING,
        last_name: type.STRING,
        email: type.STRING,
        api_key: type.STRING
    })
}
