import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Bugs() {

    const [bugs, setBugs] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch('https://acnhapi.com/v1a/bugs/')

            .then(response => response.json())

            .then(
                data => {
                    setBugs(data);
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
                {bugs.map((bug, id) =>

                    <section className="row card"key={id} >
                    <div className="list">
                            <img className="icon" src={bug[`icon_uri`]} alt={bug[`file-name`]} />
                            <div className="column list-info">
                                <h2>{bug.name["name-USen"]}</h2>
                                <Link to={`/bugs/${bug.id}`}><button>Bug Info</button></Link>
                            </div>
                    </div>
                    </section>
                )}
            </div>
        </main>
    );
}

export default Bugs