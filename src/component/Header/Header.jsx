import profile from "../../../../knowledge-cafe/images/profile.png";
const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 m-4 border-b-2">
             <h1 className='text-5xl'>Knowledge cafe</h1>
             <img src={profile} alt="" />
        </header>
    );
};

export default Header;