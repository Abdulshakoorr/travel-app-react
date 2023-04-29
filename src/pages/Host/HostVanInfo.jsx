import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { currentVan } = useOutletContext();
  return (
    <div className="px-16 py-4 flex flex-col gap-2">
      <h4>Name :{currentVan.name}</h4>
      <p> <b> Category: </b> {currentVan.type}</p>
      <p><b>Description: </b> {currentVan.description}</p>
      <p><b>Visibility: </b> public</p>
    </div>
  );
};

export default HostVanInfo;
