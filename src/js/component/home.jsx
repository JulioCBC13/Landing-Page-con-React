import React from "react";
import Navbar from "./Navbar";
import Contenedor from "./Contenedor";
import Albunes from "./Albunes";
import "/workspace/Landing-Page-con-React/src/styles/home.css"


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			{/* aqui esta la navbar */}
			<Navbar/>
			{/* aqui el primer cuadrado grande */}
			<Contenedor/>
			{/* aqui los cuadrados pequenos, lo hice de esta manera para probar, se que pude haber echo lo mismo en el .js*/}
			<div class="container px-4 text-center  py-3">
				<div class="row">
					<div class=" col-md-3" >
					<div class="p-3 border bg-light rounded-2 " id="uno"><Albunes/></div>
					</div>
					<div class=" col-md-3">
					<div class="p-3 border bg-light rounded-2 " id="uno"><Albunes/></div>
					</div>
					<div class=" col-md-3"> 
					<div class="p-3 border bg-light rounded-2 " id="uno"><Albunes/></div>
					</div>
					<div class=" col-md-3">
					<div class="p-3 border bg-light rounded-2 " id="uno"><Albunes/></div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default Home;
