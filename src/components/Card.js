import React, { useEffect, useState } from 'react';

const Card = () => {

    const [ip, setIp] = useState([]);

    const address = "8.8.8.8";
    const api_key = "at_V94QccAGWuOWGUzwS6HbuVzPXqpo8";

    useEffect(() => {
        fetch("https://geo.ipify.org/api/v1")
            .then((res) => res.json())
            .then((data) =>{
                console.log(data);

                const useIp = {
                    data: {apiKey: api_key, ipAddress: address}
                }
                setIp(useIp);
            });
    }, []);

    return (
        <div>
            <h1>IP info</h1>
        </div>
    );
}
 
export default Card;