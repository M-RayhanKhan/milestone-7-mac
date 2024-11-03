import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
    return (
        <div>
            <h3>Uncle</h3>
           <section className="flex">
           <Cousin name={'hero alom'} asset={asset}></Cousin>
           <Cousin name={'hero alika'}></Cousin>
           </section>
        </div>
    );
};

export default Uncle;