import React from "react";
import '../../App.css';
import PropTypes from 'prop-types';

const AlbumSort = ({images, name, artists, isSelected, onSelect })=>{

    AlbumSort.propTypes= {
        images: PropTypes.array.isRequired,
        name: PropTypes.array.isRequired,
        artists: PropTypes.array.isRequired,
        isSelected: PropTypes.string.isRequired,
        onSelect: PropTypes.string.isRequired
    }

    return(
        <div>
            <div className="container1">
            <img src={images} alt="Bohemian" className="gambar"/>
            <p className="albumName">{name}</p>
            <p>{artists}</p>
            <button className="button" onClick={onSelect}>{isSelected ? "Deselect" : "Select"}</button>
            </div>
        </div>
    )
};

export default AlbumSort;