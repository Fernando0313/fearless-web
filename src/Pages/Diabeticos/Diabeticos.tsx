import React from 'react';
import { Link } from 'react-router-dom';
import sopaJuliana from '../../assets/sopaJuliana.jpeg'
import Al_parrilladaVerduras from '../../assets/Al_parrilladaVerduras.jpeg'

export interface DiabeticosInterface {}

const Diabeticos: React.FC<DiabeticosInterface> = () => {
	return <div className='container' style={{width:'1000px'}}>

	<div className='row '>

		<div className='col-md-6'>
		<img style={{width:'100%'}} src={sopaJuliana}/>
		<Link to ='/Diabeticos/Entradas' ><h3>Entradas</h3></Link>
		</div>
		<div className='col-md-6'>
		<img style={{width:'100%'}} src={Al_parrilladaVerduras}/>
		<Link to ='/Diabeticos/Almuerzos'><h3>Almuerzos</h3></Link>
		</div>
	</div>
</div>;
};

export default Diabeticos;

