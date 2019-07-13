import React from "react";

function FavoriteMovieStateless(props) {
    
    return (
        <div>
        {
            props.profiles.map((profile) => (
                <p>
                {
                    `${ props.users[profile.userID].name  } 
                    loves to watch 
                    ${ props.movies[profile.favoriteMovieID].name  }`
                }
                </p>
            ))
        }
        </div>
    )
}

export default FavoriteMovieStateless;

