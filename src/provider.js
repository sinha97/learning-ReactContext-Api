import React, { useState } from 'react';

import PackageContext from "./context";

const Provider = props => {
    const [mission, setMission] = useState({
        mname: "Go To Russia",
        agent: '007',
        accept: 'Not accepted'
    });
    return (
        <PackageContext.Provider
            value={{
                data: mission,
                isAccepted: () => {
                    setMission({...mission,accept:"Mission Accepted"})
                }
            }}
        >
            {props.children}
        </PackageContext.Provider>
    )
}

export default Provider;