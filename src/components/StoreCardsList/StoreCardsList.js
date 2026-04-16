import  './StoreCardsList.scss';
import productsData from '../../apis/products.json';
import StoreCard from './StoreCard';

let StoreCardsList = () => {
    return (
        <div className='productListing'>
            {productsData.map((currentData) => {

               return (
                <StoreCard key={currentData.id} a1={"manoj1"} a2={"manoj1"} a3={"manoj1"} carddata={currentData} >
                <p>manoj kumar</p>
                <p>anjali</p>
               </StoreCard>
               )

            })}
        </div>
    );
}

export default StoreCardsList;