import React from "react";
import { useParams } from "react-router-dom";

function PropertyPage({}) {

  const { id } = useParams()

  console.log("Property ID:", id);

  return (

    <div>Property {id}</div>
  )
}

export default PropertyPage