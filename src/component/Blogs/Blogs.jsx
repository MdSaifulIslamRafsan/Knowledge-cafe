import { useState } from "react";
import { useEffect } from "react";

const Blogs = () => {

      const [blogs, SetBlogs] = useState([])

    useEffect(()=>{
        const dataLoader = async () => {
            const res = await fetch('knowledge.json');
            const data = await res.json();
            SetBlogs(data);
        }
        dataLoader();
    },[]);
    return (
        <div>
            
        </div>
    );
};

export default Blogs;