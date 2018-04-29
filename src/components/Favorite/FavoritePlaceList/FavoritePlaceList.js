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
                            Have some fun and add some places to your favorites!
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
