import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function FishInfo() {

    const {id} = useParams();
    const [fishInfo, setFishInfo] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const fishId = id;

    useEffect((id) => {
        fetch(`https://acnhapi.com/v1a/fish/`+ fishId)

            .then(response => response.json())

            .then(
                data => {
                    setFishInfo(data);
                    setIsLoading(false);
                },

                error => {
                    setHasError(true)
                    setIsLoading(false);

                }
            );


    }, [fishId]);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (hasError) {
        return <p>An error has occurred.  Please try again.</p>
    }

    return (
        <main>
            <div key={fishInfo.id} className="info">
                <img src={fishInfo[`image_uri`]} alt={fishInfo[`file-name`]} />
                <div className="info"  >
                    <p><span>Name:  </span> {fishInfo.name[`name-USen`]}</p>
                    <p><span>Location:  </span>  {fishInfo.availability.location}</p>
                    <p><span>Rarity:  </span>  {fishInfo.availability.rarity}</p>
                    <p><span>Price:  </span>  {fishInfo.price} bells</p>

                </div>
            </div>
        </main>

    )
}

export default FishInfo