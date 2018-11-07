module.exports = function(sequelize, DataTypes) {
    const userInfo = sequelize.define('userInfo', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING
      }
    },{timestamps:false}); //removes/adds automatic timestamps
  
    return userInfo;
  } 