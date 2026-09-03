'use client';
import React from 'react';

type SearchPopupProps = {
  isPopup: boolean;
  handlePopup: () => void;
};

const SearchPopup: React.FC<SearchPopupProps> = ({ isPopup, handlePopup }) => {
  return (

    <div className={`search-popup ${isPopup ? "active" : ""}`}>
        <div className="search-popup__overlay search-toggler">
            <div className="search-popup__close-btn" onClick={handlePopup}>
                <span className="fa fa-times"></span>
            </div>
        </div>
        <div className="search-popup__content">
            <form action="#">
                <label htmlFor="search" className="sr-only">search here</label>
                <input type="text" id="search" placeholder="Search Here..." />
                <button type="submit" aria-label="search submit" className="thm-btn">
                    <i className="icon-search"></i>
                </button>
            </form>
        </div>
    </div>
  );
};

export default SearchPopup;
