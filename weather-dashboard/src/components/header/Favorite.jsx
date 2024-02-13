import HeartIcon from '../../../public/heart.svg'

const Favorite = () => {
    return (
        <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
            <img src={HeartIcon} alt="Heart" />
            <span>Favorite Locations</span>
        </div>
    );
};

export default Favorite;