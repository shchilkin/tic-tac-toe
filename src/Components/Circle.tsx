import React from "react";

const Circle = () => {
    return(
        <div>
            <svg width="75%" height="75%" viewBox="0 0 236 236"
                 style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
                <path d="M117.636,0c64.925,0 117.635,52.711 117.635,117.636c0,64.925 -52.71,117.635 -117.635,117.635c-64.925,0 -117.636,-52.71 -117.636,-117.635c0,-64.925 52.711,-117.636 117.636,-117.636Zm0,44.342c40.451,0 73.293,32.842 73.293,73.294c0,40.451 -32.842,73.293 -73.293,73.293c-40.452,0 -73.294,-32.842 -73.294,-73.293c0,-40.452 32.842,-73.294 73.294,-73.294Z"
                      style={{fill: '#FD6B15'}}/>
            </svg>
    </div>
    )
}

export default Circle;