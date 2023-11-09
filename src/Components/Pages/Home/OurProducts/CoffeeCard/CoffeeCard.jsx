import './CoffeeCard.css'
import { EyeIcon, PencilIcon } from '@heroicons/react/24/solid'
import { FaTrashAlt } from "react-icons/fa";
import CommonName from '../../../../Shared/CommonName/CommonName';
import { Link } from 'react-router-dom';


const CoffeeCard = ({ coffee }) => {

    const { _id, name, chef, category, photo } = coffee;

    return (
        <>
            <div className="coffee-card-container flex flex-col xl:flex-row h-full xl:h-auto w-full items-start md:items-center justify-between gap-4 xl:gap-0 pb-4 md:p-8">
                <div><img className='h-30 lg:h-60 w-40 lg:w-64' src={photo} alt="" /></div>
                {/* <div className='flex flex-col md:flex-row '> */}
                <div className='w-full px-2 md:px-0'>
                    <div >
                        <div><span className='inline-block float-left'><CommonName>Name : </CommonName></span> <p className=' about-products-description text-lg lg:text-xl 2xl:text-2xl'>{name}</p> </div>
                        <div><span className='inline-block float-left'><CommonName>Chef : </CommonName></span> <p className='about-products-description text-lg lg:text-xl 2xl:text-2xl'>{chef}</p> </div>
                        <div><span className='inline-block float-left'><CommonName>Category : </CommonName></span> <p className='about-products-description text-lg lg:text-lg 2xl:text-2xl'>{category}</p> </div>
                    </div>
                </div>
                <div className='w-full xl:w-auto flex flex-row lg:flex-row xl:flex-col justify-around gap-4'>
                    <Link to={`viewCoffeeDetails/${_id}`}>
                        <EyeIcon className='h-10 w-10 bg-[#D2B48C] text-white p-2 rounded-md cursor-pointer' />
                    </Link>
                    <Link to={`updateExistingCoffee/${_id}`}>
                        <PencilIcon className='h-10 w-10 bg-[#3C393B] text-white p-2 rounded-md cursor-pointer' />
                    </Link>
                    <FaTrashAlt className='h-10 w-10 bg-[#EA4744] text-white p-2 rounded-md cursor-pointer' />
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default CoffeeCard;