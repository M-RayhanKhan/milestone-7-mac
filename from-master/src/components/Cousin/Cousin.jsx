import Friend from "../Friend/Friend";
import Special from "../Special/Special";


const Cousin = ({name, asset}) => {
    return (
        <div>
            <h3>Cousin</h3>
            <p>{name}</p>
            {
             asset &&  <Special asset={asset}></Special>
            }
            {
                name === "Bapparaz" && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;