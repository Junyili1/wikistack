const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
    logging: false
});

const user = db.define("user", {
    name: {type: Sequelize.STRING, allowNull: false},
    email: {type: Sequelize.STRING, allowNull: false,
            validate: {
                isEmail:true
            }
     }
})

const page = db.define("page",{
    title: {type: Sequelize.STRING, allowNull: false},
    slug: {type: Sequelize.STRING, allowNull: false,
            validate: {
                isURL: true
            }
        },
    content: {type: Sequelize.TEXT, allowNull: false},
    status: {type: Sequelize.ENUM("open", "closed")}
})


module.exports = {
    db,
    page,
    user
}