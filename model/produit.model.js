import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

export const Produit = sequelize.define("Produit", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    titre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prix: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantiteEnStock: {
        type: DataTypes.INTEGER,
        allowNull : false
    },
    quantiteMinStock: {
        type: DataTypes.INTEGER,
        allowNull :false
    }
}, {
    // model options
    timestamps: false
});

export default Produit;