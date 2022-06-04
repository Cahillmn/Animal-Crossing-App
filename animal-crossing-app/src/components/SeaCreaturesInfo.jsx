import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function SeaCreaturesInfo() {

    const {id} = useParams();
    const [seaCreaturesInfo, setSeaCreaturesInfo] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const seaId = id;

    useEffect((id) => {
        fetch(`https://acnhapi.com/v1a/sea/`+ seaId)

            .then(response => response.json())

            .then(
                data => {
                    setSeaCreaturesInfo(data);
                    setIsLoading(false);
                },

                error => {
                    setHasError(true)
                    setIsLoading(false);

                }
            );


    }, [seaId]);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (hasError) {
        return <p>An error has occurred.  Please try again.</p>
    }

    return (
        <main>
            <div key={seaCreaturesInfo.id} className="info">
                <img src={seaCreaturesInfo[`image_uri`]} alt={seaCreaturesInfo[`file-name`]} />
                <div className="info"  >
                    <p><span>Name:  </span> {seaCreaturesInfo.name[`name-USen`]}</p>
                    <p><span>Location:  </span>  {seaCreaturesInfo.availability.location}</p>
                    <p><span>Rarity:  </span>  {seaCreaturesInfo.availability.rarity}</p>
                    <p><span>Price:  </span>  {seaCreaturesInfo.price} bells</p>

                </div>
            </div>
        </main>

    )
}

export default SeaCreaturesInfo