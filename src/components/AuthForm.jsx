import React, { useState } from "react";
import Swal from "sweetalert2";
import api from "../axiosConfig";

const AuthForm = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const showAlert = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,
      confirmButtonColor: "#6366f1",
      background: "#1a1a2e",
      color: "#fff",
      customClass: {
        popup: "rounded-lg shadow-lg",
        title: "text-lg font-bold",
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const endpoint = isLogin ? "/auth/login" : "/auth/register";
      const res = await api.post(endpoint, { email, password });

      if (isLogin) {
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
        showAlert("Connexion réussie", "Bienvenue !", "success");
      } else {
        showAlert("Inscription réussie", "Connectez-vous pour continuer.", "success");
        setIsLogin(true);
      }
    } catch (err) {
      showAlert("Erreur", err.response?.data?.message || "Une erreur est survenue", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        {/* Background Blurs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>

        {/* Glassmorphic Card */}
        <div className="relative z-10 p-8 w-96 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg">
          <h2 className="text-2xl font-semibold text-white text-center">
            {isLogin ? "Connexion" : "Inscription"}
          </h2>

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="flex flex-col">
              <label className="text-gray-300">Email</label>
              <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="mt-1 p-3 w-full rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
                  required
              />
            </div>

            <div className="flex flex-col mt-3">
              <label className="text-gray-300">Mot de passe</label>
              <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mot de passe"
                  className="mt-1 p-3 w-full rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                  required
              />
            </div>

            <button
                type="submit"
                className="mt-5 w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold transition-all hover:scale-105"
                disabled={loading}
            >
              {loading ? "Chargement..." : isLogin ? "Se connecter" : "S’inscrire"}
            </button>
          </form>

          {/* Animated Toggle */}
          <div className="mt-4 text-center">
            <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-gray-400 hover:text-white transition-all"
            >
              {isLogin
                  ? "Pas de compte ? Inscrivez-vous"
                  : "Déjà un compte ? Connectez-vous"}
            </button>
          </div>
        </div>
      </div>
  );
};

export default AuthForm;
