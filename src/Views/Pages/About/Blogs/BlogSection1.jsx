import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "../../../Components/BlogCard/BlogCard";

const BlogSection1 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page with query parameter
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

  return (
    <>
      <section>
        <div className="container-fluid d-flex justify-content-center blogs-main-container">
          <div className="container">
            <div className="row d-flex">
              <div className="col-xxl-8 col-lg-7">
                <BlogCard />
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
                      // placeholder="Search blogs..."
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
    </>
  );
};

export default BlogSection1;