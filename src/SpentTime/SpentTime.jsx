import PropTypes from 'prop-types';
const SpentTime = ({spentTime}) => {
    
    return (
        <div className='bg-slate-300 p-4'>
           <h2 className='text-xl'>Spent time on read : {spentTime} min</h2>
        </div>
    );
};
SpentTime.propTypes  = {
    spentTime: PropTypes.object.isRequired,
}
export default SpentTime;