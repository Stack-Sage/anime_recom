import React, { useState } from "react";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import AnimeRecommendations from "./Recommendation";

const Home = () => {
  const [animeId, setAnimeId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]); // State for search suggestions
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    fetchAnimeId(searchTerm);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() !== "") {
      fetchSearchSuggestions(value); // Fetch suggestions as user types
    } else {
      setSuggestions([]); // Clear suggestions if input is empty
    }
  };

  const fetchSearchSuggestions = async (searchTerm) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?q=${searchTerm}&limit=16`
      );
      const data = await response.json();
      if (data.data) {
        // Filter titles that start with the searchTerm (case-insensitive)
        const filteredSuggestions = data.data.filter((anime) =>
          anime.title.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
  
        // Sort by popularity (lower rank = more popular) or score
        const sortedSuggestions = filteredSuggestions.sort((a, b) => {
          // Prioritize popularity rank; fallback to score if ranks are the same
          if (a.popularity && b.popularity) {
            return a.popularity - b.popularity; // Lower rank means higher popularity
          }
          if (a.score && b.score) {
            return b.score - a.score; // Higher score first
          }
          return 0; // If no data, leave order unchanged
        });
  
        setSuggestions(sortedSuggestions); // Set sorted suggestions
      }
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const fetchAnimeId = async (animeName) => {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?q=${animeName}&limit=1`
      );
      const data = await response.json();
      if (data.data && data.data.length > 0) {
        setAnimeId(data.data[0].mal_id); // Set the anime ID for recommendations
      } else {
        alert("No anime found with that name.");
      }
    } catch (error) {
      console.error("Error fetching anime ID:", error);
    }
  };

  return (
    <>
      <div className="pt-10 w-[50%] mx-auto">
        <PlaceholdersAndVanishInput
          className=""
          placeholders={[
            "Search Here...",
            "Get Anime Recommendations...",
            "Find Similar Anime...",
          ]}
          onChange={handleInputChange}
          onSubmit={handleSearch}
        />

        {/* Dropdown for Suggestions */}
        {suggestions.length > 0 && (
          <div className="relative mt-2">
            <ul className="absolute w-full bg-gradient-to-tr  text-teal-400 border border-black overflow-y-scroll  scrollbar-thin max-h-64  rounded-lg scrollbar-thumb-teal-900 scrollbar-track-black  shadow-lg z-10">
              {suggestions.map((anime) => (
                <li
                  key={anime.mal_id}
                  className="p-2  hover:border-black hover:shadow-lg shadow-teal-600 shadow-md hover:shadow-teal-400 transition duration-300
                  hover:text-teal-300 rounded-full ease-in-out  cursor-pointer"
                  onClick={() => {
                    setSearchTerm(anime.title);
                    fetchAnimeId(anime.title); // Fetch anime recommendations
                    setSuggestions([]); // Clear suggestions after selection
                  }}
                >
                  {anime.title}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Show Recommendations if animeId is set */}
        <div>
          {animeId && <AnimeRecommendations animeId={animeId} />}
        </div>
      </div>
    </>
  );
};

export default Home;
