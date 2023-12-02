import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

export const Livraison = sequelize.define("Livraison", {
    numeroCommande: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    datePrevue: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dateReel: {
        type: DataTypes.DATE,
        allowNull: false
    },
    adresseLivraison: {
        type: DataTypes.STRING,
        allowNull: true
    },
    etat: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // model options
    timestamps: false
});

export default Livraison;