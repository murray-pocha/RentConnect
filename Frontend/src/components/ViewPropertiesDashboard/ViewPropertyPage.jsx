import React from "react";
import LeafletMapContainer from "./LeafletMapContainer";
import '../../styles/viewPropertyPage.css'

function ViewPropertyPage () {

  return (
    <div id="map_dashboard">
      <h1>View Properties</h1>
      <LeafletMapContainer />
    </div>
  )

}

export default ViewPropertyPage