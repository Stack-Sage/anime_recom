import React, { useState, useEffect } from 'react';

const AnimeRecommendations = ({ animeId }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/recommendations`);
        if (!response.ok) {
          throw new Error('Failed to fetch recommendations');
        }
        const data = await response.json();
        setRecommendations(data.data); // Correctly set recommendations data
      } catch (error) {
        setError('Error fetching recommendations.');
        console.error('Error fetching recommendations:', error);
      } finally {
        setLoading(false);
      }
    };

    if (animeId) {
      fetchRecommendations();
    }
  }, [animeId]);

  if (loading) {
    return <p>Loading recommendations...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  // Limit to 9 recommendations
  const limitedRecommendations = recommendations.slice(0, 9);

  return (
    <div className="my-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-teal-900 scrollbar-track-black lg:max-h-[70vh] max-h-[68vh]">
      <h3 className="text-2xl text-teal-400 font-semibold mb-4">Recommended Anime:</h3>
      <div className="anime-recommendations grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {limitedRecommendations.length === 0 ? (
          <p>No recommendations found.</p>
        ) : (
          limitedRecommendations.map((anime) => (
            <div
              key={anime.entry.mal_id}
              className="anime-card bg-gradient-to-tr from-black via-slate-800 to-slate-950 p-4 rounded-lg shadow-lg 
                hover:shadow-teal-400 scale-95 shadow-teal-900 hover:shadow-xl hover:scale-100 transition duration-500 
                hover:text-teal-300 ease-in-out text-teal-200"
            >
              {/* Displaying the anime image */}
              {anime.entry.images?.jpg?.image_url ? (
                <img
                  src={anime.entry.images.jpg.image_url}
                  alt={anime.entry.title}
                  className="anime-image w-full h-44 object-cover rounded-lg mb-4"
                />
              ) : (
                <div className="no-image-placeholder bg-black w-full h-44 rounded-lg flex items-center justify-center">
                  No image available
                </div>
              )}
              {/* Displaying the title */}
              <h4 className="text-lg font-semibold text-center hover:text-teal-400 mb-2">{anime.entry.title}</h4>

              <a
                href={anime.entry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 italic text-md text-center block mt-2 hover:underline"
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

export default AnimeRecommendations;
