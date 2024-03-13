import PropTypes from 'prop-types';
import { CiBookmarkCheck } from "react-icons/ci";
const Blog = ({blog , handleBookMarks , handleSpentTime}) => {
    const {title , cover , author_img, author , posted_date , reading_time , hashtags} = blog;
   

    return (
        <div className='mb-4'>
            <img className='w-full' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex items-center justify-between my-5'>
                <div className='flex items-center gap-2'>
                    <div>
                        <img className='w-14' src={author_img} alt="" />
                    </div>
                    <div>
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <p>{reading_time} min read</p>
                    <button onClick={ () => handleBookMarks(blog)} className='text-2xl'><CiBookmarkCheck></CiBookmarkCheck></button>
                </div>
            </div>
            <h4 className='text-xl'>{title}</h4>
            {
                hashtags.map((hashtag , index) => <span className='mr-4' key={index}><a href="">#{hashtag}</a></span>)
            }
            <br />
            <button className='underline text-blue-600' onClick={() => {handleSpentTime(reading_time)}}>mark as read</button>
        </div>
    );
};
Blog.propTypes  = {
    blog: PropTypes.object.isRequired,
    handleBookMarks:PropTypes.func.isRequired,
    handleSpentTime: PropTypes.func.isRequired,
}
export default Blog;