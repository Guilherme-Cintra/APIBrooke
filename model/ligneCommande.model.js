import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

export const LigneCommande = sequelize.define("LigneCommande", {
    idProduit: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    numeroCommande: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    quantite: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    prixReel: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
}, {
    // model options
    timestamps: false
});

export default LigneCommande;