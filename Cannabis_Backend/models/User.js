module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.STRING(20),
            primaryKey: true,
        },
        password: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        nickname: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        yam: {
            type: DataTypes.INTEGER(11),
            defaultValue: 0,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    }, {
        timestamps: false
    })
};