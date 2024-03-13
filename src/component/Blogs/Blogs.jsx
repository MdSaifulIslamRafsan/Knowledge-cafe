import { useState } from "react";
import { useEffect } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookMarks , handleSpentTime}) => {

      const [blogs, SetBlogs] = useState([]);

    useEffect(()=>{
        const dataLoader = async () => {
            const res = await fetch('knowledge.json');
            const data = await res.json();
            SetBlogs(data);
        }
        dataLoader();
    },[]);
    return (
        <div className="col-span-8">
            <h1 className="text-3xl">Blogs: {blogs.length}</h1>
           { 
             blogs.map(blog => <Blog handleBookMarks={handleBookMarks} handleSpentTime={handleSpentTime} key={blog?.id} blog={blog}></Blog>)
           }
        </div>
    );
};
Blogs.propTypes  = {
    handleBookMarks:PropTypes.func.isRequired,
    handleSpentTime:PropTypes.func.isRequired,
}

export default Blogs;