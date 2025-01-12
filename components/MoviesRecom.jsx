import React, { useState, useEffect } from "react";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "f29df455e30dcd3718ed7ca669fabb39"; // Replace with your actual API key

const MovieRecommendations = ({ movieId }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${API_BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch recommendations");
        }
        const data = await response.json();
        setRecommendations(data.results || []);
      } catch (error) {
        setError("Error fetching recommendations.");
        console.error("Error fetching recommendations:", error);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      fetchRecommendations();
    }
  }, [movieId]);

  if (loading) return <p>Loading recommendations...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const limitedRecommendations = recommendations.slice(0, 9);

  return (
    <div className="my-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-teal-900 scrollbar-track-black lg:max-h-[70vh]">
      <h3 className="text-2xl text-teal-400 font-semibold mb-4">Recommended Movies:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {limitedRecommendations.length === 0 ? (
          <p>No recommendations found.</p>
        ) : (
          limitedRecommendations.map((movie) => (
            <div
              key={movie.id}
              className="bg-gradient-to-tr from-black via-slate-800 to-slate-950 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-500 hover:scale-105"
            >
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-44 object-cover rounded-lg mb-4"
                />
              ) : (
                <div className="bg-black w-full h-44 rounded-lg flex items-center justify-center">
                  No image available
                </div>
              )}
              <h4 className="text-lg font-semibold text-center mb-2">{movie.title}</h4>
              <a
                href={`https://www.themoviedb.org/movie/${movie.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 text-center block mt-2 hover:underline"
              >
                View More...
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieRecommendations;
