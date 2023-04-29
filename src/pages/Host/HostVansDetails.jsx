import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import HostVansNavbar from "../../components/HostVansNavbar";

const HostVansDetails = () => {
  const [currentVan, setCurrentVan] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="shadow-md  mt-2 ">
      <Link to=".."
        relative="path" className="back-button my-8 inline-block">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="py-8 my-8 flex items-start justify-center space-x-10 flex-wrap">
        <img src={currentVan.imageUrl} className="w-96 md:w-1/3 rounded-md" />
        <div className="text-deta">
          <h2 className="text-2xl md:text-5xl my-4">{currentVan.name}</h2>
          <h4 className="py-4">per day / pricing : ${currentVan.price}</h4>
        </div>
      </div>
      <HostVansNavbar />
      <Outlet context={{currentVan}}/>
    </main>
  );
};

export default HostVansDetails;
