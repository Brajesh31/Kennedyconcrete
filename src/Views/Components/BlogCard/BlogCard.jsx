import React, { useEffect, useRef, useState } from "react";
import Button from "../Buttons/Button";
import Blogmeta from "../../Pages/About/Blogs/Blogmeta";
import axios from "axios";

const BlogCard = ({ searchQuery = "", isSearchPage = false }) => {
  const [blog, setBlog] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [lastSearchResults, setLastSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const page = urlParams.get('page');
      return page ? parseInt(page, 10) : 1;
    }
    return 1;
  });

  const blogsPerPage = isSearchPage ? 6 : 10;
  const topRef = useRef(null);

  const fetchingData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/JSON/Blogs.json");
      console.log(response.data);
      setBlog(response.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
      setBlog([]);
    } finally {
      setLoading(false);
    }
  };

  // Filter blogs based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredBlogs(lastSearchResults);
    } else {
      const filtered = blog.filter(item =>
        item.blogtitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.blogtext?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredBlogs(filtered);
      setLastSearchResults(filtered);
    }
    setCurrentPage(1);
  }, [searchQuery, blog, lastSearchResults]);

  useEffect(() => {
    fetchingData();
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  const blogsToShow = isSearchPage ? filteredBlogs : blog;
  const totalPages = Math.ceil(blogsToShow.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = blogsToShow.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      if (isSearchPage) {
        setCurrentPage(nextPage);
      } else {
        if (typeof window !== 'undefined') {
          window.location.href = `${window.location.pathname}?page=${nextPage}`;
        }
      }
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      if (isSearchPage) {
        setCurrentPage(prevPage);
      } else {
        if (typeof window !== 'undefined') {
          window.location.href = `${window.location.pathname}?page=${prevPage}`;
        }
      }
    }
  };

  const handlePageClick = (pageNumber) => {
    if (isSearchPage) {
      setCurrentPage(pageNumber);
    } else {
      if (typeof window !== 'undefined') {
        window.location.href = `${window.location.pathname}?page=${pageNumber}`;
      }
    }
  };

  // Handle image loading errors
  const handleImageError = (e) => {
    console.log("Image failed to load:", e.target.src);
    e.target.style.display = 'none'; // Hide broken image
  };

  // Mini card component for search results
  const MiniCard = ({ item }) => (
    <div className="col-md-6 mb-4 blog-mini-card border border-0 rounded-0">
      <div className="card h-100">
        <img
          src={item.blogimg}
          alt={item.blogtitle || "Blog image"}
          className="card-img-top"
          onError={handleImageError}
        />
        <div className="card-body d-flex flex-column" id="card">
          <h5 className="card-title">{item.blogtitle}</h5>
        </div>
      </div>
    </div>
  );

  // Regular card component
  const RegularCard = ({ item }) => (
    <div className="padding mb-5">
      <div className="row">
        <div className="col-lg-12">
          <div className="blog-container">
            <img
              src={item.blogimg}
              alt={item.blogtitle || "Blog image"}
              className="img-fluid"
              onError={handleImageError}
            />
          </div>
          <div className="blog-content">
            <div className="d-flex">
              <Blogmeta />
            </div>
            <h2 className="blog-title mt-3">{item.blogtitle}</h2>
            <p className="blog-text mt-4">{item.blogtext}</p>
            <div className="mt-4">
              <Button
                bgColor="#de0b18"
                textColor="#fff"
                text="READ MORE"
                icon={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading blogs...</p>
      </div>
    );
  }

  return (
    <>
      <div ref={topRef}></div>

      {/* No results message */}
      {isSearchPage && blogsToShow.length === 0 && (
        <div className="no-results text-center py-5">
          <h4>No blogs found</h4>
          <p>Try searching for blogs using different keywords.</p>
        </div>
      )}

      {/* Render cards based on view type */}
      {isSearchPage ? (
        <div className="row">
          {currentBlogs.map((item, index) => (
            <MiniCard key={index} item={item} />
          ))}
        </div>
      ) : (
        currentBlogs.map((item, index) => (
          <RegularCard key={index} item={item} />
        ))
      )}

      {/* Pagination */}
      {blogsToShow.length > blogsPerPage && (
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-center mt-4 mb-5">
            {currentPage > 1 && (
              <button
                className="btn me-2 pagination-button"
                onClick={goToPrevPage}
              >
                <i className="fa-solid fa-angle-left"></i>
              </button>
            )}

            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  className={`btn me-2 pagination-button ${currentPage === pageNumber ? 'active' : ''}`}
                  onClick={() => handlePageClick(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            })}

            {currentPage < totalPages && (
              <button className="btn pagination-button" onClick={goToNextPage}>
                <i className="fa-solid fa-angle-right"></i>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCard;