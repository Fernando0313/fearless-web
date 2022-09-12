import React from 'react';
import celiaco from '../../assets/portadaCeliaco.jpg'
import diabete from '../../assets/portadaDiabetico.jpg'
import { Link } from "react-router-dom";
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
	return <div className='container' style={{width:'1000px'}}>

		<div className='row '>

			<div className='col-md-6'>
			<img style={{width:'100%'}} src={diabete}/>
			<Link to ='/Diabeticos'><h3> Diabeticos</h3></Link>
			</div>
			<div className='col-md-6'>
			<img style={{width:'100%'}} src={celiaco}/>
			<Link to ='/Celiacos'><h3>Celiaco</h3></Link>
			</div>
		</div>
	</div>;
};

export default Home;

