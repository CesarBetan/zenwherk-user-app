import React, { Component } from 'react';
import './FavoritePlaceList.css';
import CompactPlaceCell from "../../CompactPlaceCell/CompactPlaceCell";

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

export default FavoritePlaceList;
