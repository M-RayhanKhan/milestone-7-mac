import profile from '../../assets/profile.png'

const Navbar = () => {
    return (
        <div className='flex py-3 border-b-2 items-center justify-between max-w-6xl mx-auto'>
            <h1 className="text-3xl font-bold">Knowledge Cafe🎁🥴</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Navbar;