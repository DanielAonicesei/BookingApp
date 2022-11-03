import React from 'react'
import useFetch from '../../hooks/useFetch';
import "./propertyList.css"

const PropertyList = () => {
    const {data,loading,error} = useFetch("/hotels/countByType");

    const images = [
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/434139/pexels-photo-434139.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/816198/pexels-photo-816198.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=600"
    ];
  return (
    <div className="pList">
        {loading ? ("loading") :(
        <>
            {data && 
                images.map((img,i)=>(

                    <div className="pListItem">
                        <img src={img} alt="" className="pListImg" />
                        <div className="pListTitles">
                            <h1>{data[i].type}</h1>
                            <h2>{data[i].count} {data[i].type}</h2>
                        </div>
                    </div>
        
                ))}
        
            </>
        )}
    </div>
  );
};

export default PropertyList