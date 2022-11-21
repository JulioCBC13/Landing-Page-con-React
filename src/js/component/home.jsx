import React from "react";
import Navbar from "./Navbar";
import Contenedor from "./Contenedor";
import Albunes from "./Albunes";
import "/workspace/react-hello/src/styles/home.css"


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Contenedor/>
			<div class="container px-4 text-center py-3">
				<div class="row gx-5">
					<div class="col" >
					<div class="p-3 border bg-light rounded-2" id="uno"><Albunes/></div>
					</div>
					<div class="col">
					<div class="p-3 border bg-light rounded-2" id="uno"><Albunes/></div>
					</div>
					<div class="col">
					<div class="p-3 border bg-light rounded-2" id="uno"><Albunes/></div>
					</div>
					<div class="col">
					<div class="p-3 border bg-light rounded-2" id="uno"><Albunes/></div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default Home;
