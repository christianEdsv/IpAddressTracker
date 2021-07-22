import React from 'react';

const Card = ({ipDomain}) => {


    const address = {ipDomain};

    return (
        <div>
            <p>{ipDomain.isp}</p>
            <p>{ipDomain.ip}</p>
            <p>{ipDomain.isp}</p>
        </div>
    );
}
 
export default Card;

/*
{"ip":"8.8.8.8",
"location":{"country":"US","region":"California","city":"Mountain View","lat":37.38605,"lng":-122.08385,"postalCode":"94035","timezone":"-07:00","geonameId":5375480},
"domains":["0--9.ru","000.lyxhwy.xyz","000180.top","00049ok.com","000xs.net"],
"as":{"asn":15169,"name":"Google LLC","route":"8.8.8.0\/24","domain":"https:\/\/about.google\/intl\/en\/","type":"Content"},
"isp":"Google LLC","proxy":{"proxy":false,"vpn":false,"tor":false}}*/