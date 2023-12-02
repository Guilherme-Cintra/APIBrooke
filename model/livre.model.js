import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

export const Livre = sequelize.define("Livre", {
    idProduit: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    ISBN: {
        type:DataTypes.STRING,
        allowNull: false
    },
    dateParution: {
        type:DataTypes.DATE,
        allowNull: false
    },
    editeur: {
        type:DataTypes.STRING,
        allowNull: false
    },
    auteurs: {
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

  export default Livre