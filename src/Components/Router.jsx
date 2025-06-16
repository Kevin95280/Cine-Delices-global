import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Food/Recipes";
/*
import RecipeDetail from "../pages/RecipeDetail";
import Addrecipe from "../pages/AddRecipe";*/
import MoviesSeries from "../pages/Cinema/MoviesSeries";
import MovieSeriesDetail from "../pages/Cinema/MovieSeriesDetail";
/*import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";*/
import MyAccount from "../pages/Account/MyAccount";
import MyRecipes from "../pages/MyRecipes";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import LegalNotice from "../pages/LegalNotice";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
// import NotFound from "../pages/NotFound"; // Page 404*/

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Pages principales */}
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        {/*
        <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
        <Route path="/add-recipe" element={<AddRecipe />} />*/}
        <Route path="/movies-and-series" element={<MoviesSeries />} />
        <Route path="/movies-and-series/:movieId" element={<MovieSeriesDetail />} />
        
        {/* Authentification */}
        {/*<Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />*/}

        {/* Gestion utilisateur */}
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/my-recipes" element={<MyRecipes />} />

        {/* Section Footer */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        {/* Page 404 */}
        {/*<Route path="*" element={<NotFound />} />*/}
      </Routes>
    </Router>
  );
}