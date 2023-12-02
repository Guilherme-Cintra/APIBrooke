import express from "express"
import { config } from "dotenv";
import cors from 'cors';
import bodyParser from 'body-parser';
import { errorHandler } from './middlewares/errorHandler.js';
import { sequelize } from './config/config.js';
import routerClient from "./routes/client.route.js";
import routerCommande from "./routes/commande.route.js";
import routerLivraison from "./routes/livraison.route.js";
import routerFournisseur from "./routes/fournisseur.route.js";
import routerProduit from "./routes/produit.route.js";
import routerLigneCommande from "./routes/ligneCommande.route.js";
import routerProduitApprovisionne from "./routes/produitApprovisionne.route.js";
import routerFilm from "./routes/film.route.js";
import routerLivre from "./routes/livre.route.js";
import routerJeux from "./routes/jeux.route.js";
import routerGestionnaire from "./routes/gestionnaire.route.js";
import routerApprovisionnement from "./routes/approvisionnement.route.js";


//Utiliser config pour pouvoir utiliser les variables d'environement
config()

const app = express(); // utiliser une instance de express 

app.use(cors());

app.use(bodyParser.json());//Lire dans les objets json
 
app.use("/api/clients/",routerClient)
app.use("/api/commandes/",routerCommande)
app.use("/api/livraisons/",routerLivraison)
app.use("/api/fournisseurs/",routerFournisseur)
app.use("/api/produits/",routerProduit)
app.use("/api/ligneCommandes/",routerLigneCommande)
app.use("/api/produitApprovisionnes/",routerProduitApprovisionne)
app.use("/api/films/",routerFilm)
app.use("/api/livres/",routerLivre)
app.use("/api/jeux/",routerJeux)
app.use("/api/gestionnaires/",routerGestionnaire)
app.use("/api/approvisionnement/",routerApprovisionnement)

app.use(errorHandler);

// PORT définit dans .env
const PORT = process.env.PORT || 1001
app.get("/", (req, res) => {
    res.send("Bonjour tout le monde<br/>Utilisation du serveur express!!!")
})

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});