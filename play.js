const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({ //db connection
    dialect: 'sqlite',
    storage: 'fsjstd-restapi.db'
  });

const Users = sequelize.define('Users', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  emailAddress: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  password: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});



  // Use Sequelize authentication function to test database connection
  (async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection to the database successful!');
      main()
  
    
    } catch (error) {
      console.error('Error connecting to the database: ', error);
    }
  })();

function main() {
    (async () => {
        // Sync 'Movies' table
        await Users.sync();
      
        try {
           let result = await Users.findAll({
            attributes:[
            "firstName",
            "lastName",
            "emailAddress",
            "password",
        ]
           })
           console.log(JSON.stringify(result, null, 4))
        } catch (error) {
          console.error('Error connecting to the database: ', error);
        }
      })();
}