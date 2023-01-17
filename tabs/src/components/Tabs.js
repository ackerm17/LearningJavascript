import React, { useState } from  'react';

const Tabs = (prop) => {
    const changeTab = (e) => {
        prop.setTab(e.target.value);

    }
    return (
        <div>
            {prop.tabSize.map((item, i) => <button key={i} onClick={changeTab} value={item}>{item}</button>)}
        </div>
    );
}

export default Tabs