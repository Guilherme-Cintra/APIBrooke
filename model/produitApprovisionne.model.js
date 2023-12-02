import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

export const ProduitApprovisionne = sequelize.define("ProduitApprovisionne", {
    idProduit: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    numeroApprovisionnement: {
        type:DataTypes.STRING,
        allowNull: false,
        primaryKey : true
    },
    quantite: {
        type:DataTypes.STRING,
        allowNull: false
    },
    prixReel: {
        type:DataTypes.STRING,
        allowNull: false
    }
}, {
    // model options
    timestamps: false
  })

  export default ProduitApprovisionne