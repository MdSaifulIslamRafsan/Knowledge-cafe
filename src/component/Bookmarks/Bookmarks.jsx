import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
import SpentTime from '../../SpentTime/SpentTime';
const Bookmarks = ({bookmarks , spentTimes}) => {

    return (
        <div className="col-span-4">

            {
                <SpentTime spentTime = {spentTimes}></SpentTime>
            }
            <div className='bg-gray-200 p-4'>

                <h2 className='text-2xl'>Bookmarks Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
            
            
        </div>
    );
};
Bookmarks.propTypes  = {
    bookmarks: PropTypes.array.isRequired,
    spentTimes: PropTypes.array.isRequired,
}
export default Bookmarks;