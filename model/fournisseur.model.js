import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

export const Fournisseur = sequelize.define("Fournisseur", {
    numero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    entreprise: {
        type: DataTypes.STRING,
        allowNull: false
    },
    adresse: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // model options
    timestamps: false
});

export default Fournisseur;