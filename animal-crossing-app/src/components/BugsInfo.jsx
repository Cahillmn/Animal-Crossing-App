import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function BugInfo() {

    const {id} = useParams();
    const [bugInfo, setBugInfo] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const bugId = id;

    useEffect((id) => {
        fetch(`https://acnhapi.com/v1a/bugs/`+ bugId)

            .then(response => response.json())

            .then(
                data => {
                    setBugInfo(data);
                    setIsLoading(false);
                },

                error => {
                    setHasError(true)
                    setIsLoading(false);

                }
            );


    }, [bugId]);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (hasError) {
        return <p>An error has occurred.  Please try again.</p>
    }

    return (
        <main>
            <div key={bugInfo.id} className="info">
                <img src={bugInfo[`image_uri`]} alt={bugInfo[`file-name`]} />
                <div className="info"  >
                    <p><span>Name:  </span> {bugInfo.name[`name-USen`]}</p>
                    <p><span>Location:  </span>  {bugInfo.availability.location}</p>
                    <p><span>Rarity:  </span>  {bugInfo.availability.rarity}</p>
                    <p><span>Price:  </span>  {bugInfo.price} bells</p>

                </div>
            </div>
        </main>

    )
}

export default BugInfo