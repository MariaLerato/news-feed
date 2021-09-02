import React from 'react';
import { Link } from 'react-router-dom';
const Mapping = ({abstract,headline,lead_paragraph,_id}) =>{
    return(
        <>
      <Link to={'/articles/' + _id} > <h1>{headline}</h1></Link>
        <br />
        <b>{abstract}</b>
        <p>{lead_paragraph}</p>

        </>
    )
}
export default Mapping

