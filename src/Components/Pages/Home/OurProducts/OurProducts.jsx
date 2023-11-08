import { Link } from "react-router-dom";
import CommonTitle3 from "../../../Shared/CommonTitles/CommonTitle3/CommonTitle3";
import './OurProducts.css'

import { FaCoffee } from 'react-icons/fa';
import CoffeeCard from "./CoffeeCard/CoffeeCard";

const OurProducts = ({coffees, setCoffees}) => {

    return (
        <div className="bg-white py-6 md:py-16 lg:py-28">
            <div className="our-products-container bg-white">

            <div className="min-h-min w-11/12 md:w-5/6 mx-auto">
                {/* header of the section */}
                <div className="text-center">
                    <p className="about-products-description text-base">--- Sip & Savor ---</p>
                    <CommonTitle3>Our Popular Products</CommonTitle3>
                    <Link to='/addNewCoffee'>
                        <button className="add-coffee-button text-base h-9 w-24 md:text-2xl md:h-12 md:w-32 inline-flex items-center justify-center gap-1">
                            Add Coffee <FaCoffee/>
                        </button>
                    </Link>
                </div>

                {/* body of the our products section */}
                <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-2 md:gap-2 xl:gap-4 py-14">
                        {
                            coffees.map(coffee => <CoffeeCard 
                                key={coffee._id}
                                coffee={coffee}
                                coffees={coffees}
                                setCoffees={setCoffees}
                                ></CoffeeCard>)
                        }
                </div>
            </div>
            </div>
        </div>
    );
};

export default OurProducts;