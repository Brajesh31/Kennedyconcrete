import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import BlogCard from "../../../Components/BlogCard/BlogCard";
import Hero from "../../../Components/Hero/Hero";

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    // Get search query from URL parameters
    useEffect(() => {
        const query = searchParams.get('q');
        if (query) {
            setSearchQuery(query);
        }
    }, [searchParams]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(e);
        }
    };

    const clearSearch = () => {
        setSearchQuery("");
        navigate("/search");
    };

    return (
        <section className="search-results-page">
            <Hero title={"Search Results"} />
            <div className="container-fluid d-flex justify-content-center blogs-main-container">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-xxl-8 col-lg-7">
                            <BlogCard
                                searchQuery={searchQuery}
                                isSearchPage={true}
                            />
                        </div>
                        <div className="col-xxl-4 col-lg-5">
                            <div className="slidebar-area">
                                <form onSubmit={handleSearch}>
                                    <label htmlFor="search" className="search-label">
                                        Search
                                    </label>
                                    <div className="search-underline"></div>
                                    <div className="d-flex mt-3">
                                        <input
                                            type="text"
                                            className="inputarea"
                                            id="search"
                                            value={searchQuery}
                                            onChange={handleInputChange}
                                            onKeyPress={handleKeyPress}
                                            placeholder="Search blogs..."
                                        />
                                        <button
                                            type="submit"
                                            className="search-btn"
                                            disabled={!searchQuery.trim()}
                                        >
                                            Search
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchResults;