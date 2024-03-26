import React, { useEffect, useState } from "react";

function MediumIcon() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                },
                (error) => {
                    console.error("Error getting location: ", error);
                    setLocation(null);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
            setLocation(null);
        }
    }, []);

    return (
        <div className="pt-[20px] items-center justify-center">
            <div>
                <img src={"/assets/icons/mLocation.svg"} height={210} width={212.779} alt="Location Icon" />
            </div>
            {location && (
                <p>User's Location: Latitude {location.latitude}, Longitude {location.longitude}</p>
            )}
        </div>
    );
}

export default MediumIcon;
