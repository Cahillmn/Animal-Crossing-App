import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SeaCreatures() {

    const [seaCreatures, setSeaCreatures] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch('https://acnhapi.com/v1a/sea/')

            .then(response => response.json())

            .then(
                data => {
                    setSeaCreatures(data);
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
                {seaCreatures.map((seaCreature, id) =>

                    <section className="row card"key={id} >
                    <div className="list">
                            <img className="icon" src={seaCreature[`icon_uri`]} alt={seaCreature[`file-name`]} />
                            <div className="column list-info">
                                <h2>{seaCreature.name["name-USen"]}</h2>
                                <Link to={`/seacreatures/${seaCreature.id}`}><button>Sea Creature Info</button></Link>
                            </div>
                    </div>
                    </section>
                )}
            </div>
        </main>
    );
}

export default SeaCreatures