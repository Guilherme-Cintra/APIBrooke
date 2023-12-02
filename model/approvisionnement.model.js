import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

export const Approvisionnement = sequelize.define("Approvisionnement", {
    numero: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type:DataTypes.DATE,
        allowNull: false
    },
    idFournisseur: {
        type:DataTypes.STRING,
        allowNull: false
    },
    etat: {
        type:DataTypes.STRING,
        allowNull: false
    }
}, {
    
    // model options
    timestamps: false
  })

  export default Approvisionnement