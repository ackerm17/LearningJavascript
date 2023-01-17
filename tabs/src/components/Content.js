import React from 'react';

const Content = (prop) => {
    return (
        <div>
            {
                prop.tab ?
                    <p>{prop.tab} content is showing here.</p> : ''
            }
        </div>
    );
}

export default Content;