import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
     const {title} = bookmark;
    return (
        <div>
            <h2 className='text-lg my-3 bg-teal-100 p-4'>{title}</h2>
        </div>
    );
};

Bookmark.propTypes  = {
    bookmark: PropTypes.object.isRequired,
}

export default Bookmark;