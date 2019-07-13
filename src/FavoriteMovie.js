import React from "react";


class FavoriteMovie extends React.Component {
    
    render() {
        return (
        <div>
        {
            this.props.profiles.map((profile) => (
                //userId = profile.userID
                //favMovieId = profile.favoriteMovieID
                //userName = this.props.users[userId]
                //favoriteMovie = this.props.movies[favMovieId]
                <p key={profile.userID}> 
                { 
                    `${this.props.users[profile.userID].name}s  
                    favorite movie is 
                    ${this.props.movies[profile.favoriteMovieID].name}`
                }
                </p>
            ))
            
        }
        </div>
        );
    }
}



export default FavoriteMovie;

