import React, {useEffect, useState} from 'react';
import SetPlayersNumber from "../SetPlayersNumber";
import ShowList from "../ShowList";
import FractionList from "../../fractionList";
import FractionConfig from "../FractionConfig";

function App() {
    return (
        <>
            <ShowList text={"Список фракций:"} listName={Array.from(FractionList.keys())}/>
            <SetPlayersNumber/>
            <p></p>
            <FractionConfig/>
        </>
    )
}

export default App;