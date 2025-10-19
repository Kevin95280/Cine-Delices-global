//import du client PostgreSQL
import client from "../database.js";
import Movie from "../models/Movie.js";

const movieController = {

  // ajout d'un film
  createMovie: async (req, res) => {
    // bloc try, premier composant de la structure de gestion des erreurs, contient le code à éxécuter tout en surveillant les erreurs potentielles
    try {
      // récupération des [prop]riétés attendues depuis le corps de la requête qui ne contient que des strings
      // et conversion des valeurs numériques en entiers
      const TMDB_id = parseInt(req.body.TMDB_id);
      const title = req.body.title;
      const overview = req.body.overview;
      const poster_path = req.body.poster_path;
      const media_type = req.body.media_type;

      // création d'une nouvelle instance de Movie avec les données reçues
      const movieToAdd = new Movie({
        TMDB_id,
        title,
        overview,
        poster_path,
        media_type
      })

      // appel de la méthode d'instance create() pour l'insertion dans la BDD
      const result = await movieToAdd.create();
      // renvoi du résultat au format JSON avec le statut 201 corespondant à "created"
      return res.status(201).json({
        message: "Film créé avec succès",
        inserted: result
      });
    }
    // bloc catch, à exécuter en cas d'erreur dans le bloc try
    catch (error) {
      // affichage du message d'erreur avec le statut 500 correspondant à une erreur serveur interne
      return res.status(500).json({
        error: "Erreur lors de la création du film"
      });
    }
  },

  // lecture de tous les enregistrements de la table "movie"
  getAllMovies: async (req, res) => {
    try {
      // appel à la méthode statique findAll() de la classe Movie
      const allMovies = await Movie.findAll();
      // renvoi des enregistrements au format JSON, avec un statut 200 pour ok
      return res.status(200).json(allMovies);
    } catch (error) {
      return res.status(500).json({
        error: "Erreur lors de la récupération de tous les films"
      })
    }
  },

  // récupération d'un film à partir de l'id
  getMovieById: async (req, res) => {
    // récupération de l'id dans les paramètres de la requête, celle-ci étant au départ une string, méthode parseInt pour la transformer en entier
    const movieId = parseInt(req.params.id);
    try {
      const movieById = await Movie.findById(movieId);
      console.log(movieById)
      if (!movieById) {
        return res.status(404).json({
          error: "L'id spécifié n'existe pas"
        })
      }
      return res.status(200).json(movieById);
    } catch (error) {
      return res.status(500).json({
        error: "Erreur lors de la récupération du film"
      })

    }
  },

  // modification d'un film à partir de l'id
  updateMovie: async (req, res) => {
    try {
      // récupération de l'id dans les paramètres de la requête et conversion en entier
      const movieId = parseInt(req.params.id);
      const movie = await Movie.findById(movieId);
      if (!movie) {
        res.status(404).json({
          error: "L'id spécifié n'existe pas"
        })
      }

      // récupération de l'objet avec son index
      const movieToUpdate = movie[0];
      // fusion des propriétés du film à modifier et celles du corps de la requête
      const mergeMovieProperties = Object.assign(movieToUpdate, req.body);
      // création d'une nouvelle instance de Movie avec les données reçues
      const newMovie = new Movie(mergeMovieProperties);
      // appel à la méthode d'instance update() pour l'insertion dans la BDD
      const updatedMovie = await newMovie.update();
      // si result est false, alors affichage d'un message d'erreur avec le statut 304 correspondant à "not modified"
      if (updatedMovie === 0) {
        return res.status(304).json({
          error: "Modification non effectuée"
        });
      }
      // renvoi du résultat au format JSON avec le statut 200 corespondant à "OK"
      return res.status(200).json({
        message: "Film modifié avec succès",
        modified: movie
      });
    }
    // bloc catch, à exécuter en cas d'erreur dans le bloc try
    catch (error) {
      // affichage du message d'erreur avec le statut 500 correspondant à une erreur serveur interne
      return res.status(500).json({
        error: "Erreur lors de la modification du film"
      });
    }
  },

  deleteMovie: async (req, res) => {
    try {
      // récupération de l'id dans les paramètres de la requête et conversion en entier
      const movieId = parseInt(req.params.id);
      const movieById = await Movie.findById(movieId);
      if (!movieById) {
        res.status(404).json({
          error: "L'id spécifié n'existe pas"
        })
      }
      // récupération de l'objet à partir de son index
      const movie = movieById[0]
      // création de l'instance du film à supprimer
      const movieToDelete = new Movie(movie)
      // appel de la méthode d'instance delete
      const deletedMovie = await movieToDelete.delete();
      res.status(200).json({
        message: "Le film a bien été supprimé",
        removed: deletedMovie
      });
    } catch (error) {
      res.status(500).json({
        error: "Erreur lors de la suppression du film"
      });
    }
  },

  // Déclaration de la méthode asynchrone
  autocomplete: async (req, res) => {

    // On extrait la query string search depuis l’URL
    const { search } = req.query;

    // on bloque les recherches trop courtes ou absentes pour éviter des requêtes trop larges.
    if (!search || search.length < 2) {
      return res.status(400).json({
        error: "Recherche trop courte"
      });
    }

    try {
      // Lancement d'une recherche paramétrée (ILIKE = recherche insensible à la casse / %${search}% = recherche contenant le texte / LIMIT 10 = tu limites à 10 résultats / ORDER BY title ASC = trie alphabétique)
      const result = await client.query(
        `SELECT id, title FROM movie WHERE LOWER(title) ILIKE $1 ORDER BY title ASC LIMIT 10`,
        [`%${search.toLowerCase()}%`]
      )

      // On renvoie un tableau d'objets coté front de { id, title }
      res.json(result.rows);
    } catch (error) {
      console.error("Erreur lors de l'autocomplétion des films :", error);
      res.status(500).json({
        error: "Erreur serveur"
      });
    }
  },

  // Récupérer les films par genre
  getByGenre: async (req, res) => {
  try {
    const genreName = req.params.name;

    const result = await client.query(`
      SELECT movie.*
      FROM movie
      JOIN movie_has_genre ON movie.id = movie_has_genre.movie_id
      JOIN genre ON movie_has_genre.genre_id = genre.id
      WHERE genre.name = $1
    `, [genreName]);

    const enhancedMovies = result.rows.map((movie) => {
      const isFullUrl = movie.poster_path?.startsWith("http://") || movie.poster_path?.startsWith("https://");
      return {
        ...movie,
        poster_url: isFullUrl
          ? movie.poster_path
          : `http://localhost:3000/uploads/${movie.poster_path}`
      };
    });

    res.status(200).json(enhancedMovies);
  } catch (error) {
    console.error("Erreur getByGenre:", error);
    res.status(500).json({ error: "Erreur serveur." });
  }
}
};
export default movieController;