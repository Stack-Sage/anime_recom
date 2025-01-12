// import React, { useState } from "react";
// import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
// import MovieRecommendations from "./MoviesRecom";

// const API_BASE_URL = "https://api.themoviedb.org/3";
// const API_KEY = "f29df455e30dcd3718ed7ca669fabb39"; // Replace with your actual API key

// const Movies = () => {
//   const [movieId, setMovieId] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = () => {
//     fetchMovieId(searchTerm);
//   };

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     if (value.trim() !== "") {
//       fetchSearchSuggestions(value);
//     } else {
//       setSuggestions([]);
//     }
//   };

//   const fetchSearchSuggestions = async (term) => {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${term}&page=1`
//       );
//       const data = await response.json();
//       if (data.results) {
//         const filteredSuggestions = data.results
//           .filter((movie) => movie.title.toLowerCase().startsWith(term.toLowerCase()))
//           .sort((a, b) => b.popularity - a.popularity);
//         setSuggestions(filteredSuggestions);
//       }
//     } catch (error) {
//       console.error("Error fetching search suggestions:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchMovieId = async (movieName) => {
//     try {
//       const response = await fetch(
//         `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${movieName}&page=1`
//       );
//       const data = await response.json();
//       if (data.results && data.results.length > 0) {
//         setMovieId(data.results[0].id);
//       } else {
//         alert("No movie found with that name.");
//       }
//     } catch (error) {
//       console.error("Error fetching movie ID:", error);
//     }
//   };

//   return (

    
//     <div className="pt-10 w-[50%] mx-auto">
      
//       <PlaceholdersAndVanishInput
//         placeholders={[
//           "Search Movies...",
//           "Get Movie Recommendations...",
//           "Find Similar Movies...",
//         ]}
//         onChange={handleInputChange}
//         onSubmit={handleSearch}
//       />

     

//       {suggestions.length > 0 && (
//         <div className="relative mt-2">
//           <ul className="absolute w-full bg-gradient-to-tr text-teal-400 border border-black overflow-y-scroll scrollbar-thin max-h-64 rounded-lg scrollbar-thumb-teal-900 scrollbar-track-black shadow-lg z-10">
//             {suggestions.map((movie) => (
//               <li
//                 key={movie.id}
//                 className="p-2 hover:shadow-lg transition duration-300 hover:text-teal-300 rounded-full cursor-pointer"
//                 onClick={() => {
//                   setSearchTerm(movie.title);
//                   fetchMovieId(movie.title);
//                   setSuggestions([]);
//                 }}
//               >
//                 {movie.title}
//               </li>
//             ))}
//           </ul>


         
//         </div>
//       )}

//       {movieId && <MovieRecommendations movieId={movieId} />}
//     </div>
//   );
// };

// export default Movies;


import React from 'react'

const Movies = () => {
  return (
    <div className=' text-[2.5em] font-serif text-white font-bold  '>
      Coming Soon ...
    </div>
  )
}

export default Movies
