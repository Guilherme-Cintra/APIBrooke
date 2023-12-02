import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

export const Film = sequelize.define("Film", {
    idProduit: {
        type: DataTypes.INTEGER,
        
        primaryKey: true
    },
    acteurs: {
        type:DataTypes.STRING,
        allowNull: false
    },
    realisateur: {
        type:DataTypes.STRING,
        allowNull: false
    },
    format: {
        type:DataTypes.STRING,
        allowNull: false
    },
    videoExtrait: {
        type:DataTypes.STRING,
        allowNull: false
    },
    categories: {
        type:DataTypes.STRING,
        allowNull: false
    }
}, {
    
    // model options
    timestamps: false
  })

  export default Film