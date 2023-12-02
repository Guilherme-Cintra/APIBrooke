import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

export const Gestionnaire = sequelize.define("Gestionnaire", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom: {
        type:DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type:DataTypes.STRING,
        allowNull: false
    },
    courriel: {
        type:DataTypes.STRING,
        allowNull: false
    },
    password: {
        type:DataTypes.STRING,
        allowNull: false
    }
}, {
    
    // model options
    timestamps: false
  })

  export default Gestionnaire