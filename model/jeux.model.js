import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

export const JeuVid = sequelize.define("JeuVid", {
    idProduit: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    auteurs: {
        type: DataTypes.STRING,
        allowNull: false
    },
    collection : {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    
    // model options
    timestamps: false
  })

  export default JeuVid