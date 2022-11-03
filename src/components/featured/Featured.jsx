import React from 'react';
import useFetch from '../../hooks/useFetch';
import "./featured.css";


const Featured = () => {
    
    const {data,loading,error,reFetch} = useFetch("/hotels/countByCity?cities=berlin,madrid,london");
  return (
    <div className="featured">
        {loading ? ("Loading please wait") : ( <><div className="featuredItem">
            <img src="https://images.pexels.com/photos/2678456/pexels-photo-2678456.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Berlin</h1>
                <h2>{data[0]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Madrid</h1>
                <h2>{data[1]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/11676075/pexels-photo-11676075.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>London</h1>
                <h2>{data[2]} properties</h2>
            </div>
        </div></>)}
    </div>
  )
}

export default Featured