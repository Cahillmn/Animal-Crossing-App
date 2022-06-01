import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Fish() {

    const [fishes, setFishes] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch('https://acnhapi.com/v1a/fish/')

            .then(response => response.json())

            .then(
                data => {
                    setFishes(data);
                    setIsLoading(false);
                },

                error => {
                    setHasError(true)
                    setIsLoading(false);

                }
            );


    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (hasError) {
        return <p>An error has occurred.  Please try again.</p>
    }

    return (
        <main>
            <div className="row">
                {fishes.map((fish, id) =>

                    <section className="row card"key={id} >
                    <div className="list">
                            <img className="icon" src={fish[`icon_uri`]} alt={fish[`file-name`]} />
                            <div className="column list-info">
                                <h2>{fish.name["name-USen"]}</h2>
                                <Link to={`/fish/${fish.id}`}><button>Fish Info</button></Link>
                            </div>
                    </div>
                    </section>
                )}
            </div>
        </main>
    );
}

export default Fish