import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

export const Commande = sequelize.define("Commande", {
    numero: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type:DataTypes.DATE,
        allowNull: false
    },
    idClient: {
        type:DataTypes.INTEGER,
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

  export default Commande