import { useEffect, useState } from "react";
import { useBaseColourGlobalData, useBaseColourGlobalDispatch } from "../contexts/baseColourContext";
import { Sketch } from "@uiw/react-color";



export default function GeneratorPage(){

	// Base colour from form 
	let [formBaseColour, setFormBaseColour] = useState("#000000");

	// Base colour from global state 
	let baseColourGlobal = useBaseColourGlobalData();
	// let baseColourGlobalRaw = useContext(BaseColourGlobalDataContext);
	let setBaseColourGlobal = useBaseColourGlobalDispatch();

	// On component mount, set local form value to global state value 
	useEffect(() => {
		setFormBaseColour(baseColourGlobal);
	}, [baseColourGlobal]);

    useEffect(() => {
        setBaseColourGlobal(formBaseColour);
    }, [formBaseColour]);

	return(
		<div>
			{/* Base colour input form */}
			<h1>{formBaseColour}</h1>
            {/* <input type="color" name="" id=""></input> */}
            <Sketch color={formBaseColour} onChange={(colour) => setFormBaseColour(colour.hex)} />

			{/* CSS theme generator component  */}
		</div>
	)

}