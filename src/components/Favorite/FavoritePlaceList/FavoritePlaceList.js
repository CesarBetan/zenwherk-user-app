import React, { Component } from 'react';
import './FavoritePlaceList.css';
import CompactPlaceCell from "../../CompactPlaceCell/CompactPlaceCell";
import PropTypes from "prop-types";

class FavoritePlaceList extends Component {
    render() {
        const userFavorites = this.props.userFavorites;
        return (
            <div>
                {
                    userFavorites === undefined ?
                        <div>
                            Diviértete y añade algunos lugares a tus favoritos!
                        </div>
                        :
                        <div className="favorites-list-container">
                            {
                                userFavorites.map((place, i) => (
                                    <CompactPlaceCell key={i} place={place}/>
                                ))
                            }
                        </div>
                }
            </div>
        );
    }
}

FavoritePlaceList.defaultProps = {
    userFavorites: []
};

FavoritePlaceList.propTypes = {
    userFavorites: PropTypes.array.isRequired
};

export default FavoritePlaceList;
