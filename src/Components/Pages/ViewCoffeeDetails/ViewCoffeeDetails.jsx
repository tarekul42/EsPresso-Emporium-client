import { FaArrowLeft } from 'react-icons/fa';
import CommonTitl2 from '../../Shared/CommonTitles/CommonTitle2/CommonTitl2';
import './ViewCoffeeDetails.css'
import { Link, useLoaderData } from 'react-router-dom';
import CommonName from '../../Shared/CommonName/CommonName';

const ViewCoffeeDetails = () => {
    const loadedCoffee = useLoaderData();
    const { name, chef, supplier, taste, category, details, photo } = loadedCoffee;

    return (
        <div className="bg-[#FFF] py-7 xl:p-20">
            <div className='min-h-min w-11/12 md:w-5/6 mx-auto'>
                <div className='add-new-coffee-form'>
                    {/* back button */}
                    <Link to='/'>
                        <div className='back-to-home inline-flex items-center cursor-pointer rounded-xl mb-7 xl:mb-20'>
                            <FaArrowLeft className='common-title2 pb-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:pb-4' />
                            <CommonTitl2>
                                Back to home</CommonTitl2>
                        </div>
                    </Link>
                    {/* the body start form here */}
                    <div className='form-container bg-[#F4F3F0] rounded-md'>
                        <div className='flex flex-col lg:flex-row items-center justify-between px-4 md:px-10 lg:px-20 xl:px-32'>
                            <div className='w-full lg:w-1/2'>
                                <img className='md:w-1/2 lg:w-full' src={photo} alt="" />
                            </div>
                            <div className='w-full lg:w-2/4'>
                            <CommonTitl2>Espresso Emporium</CommonTitl2>
                                <div className='py-1'><span className='inline-block float-left'><CommonName>Name : </CommonName></span> <p className=' about-products-description text-lg lg:text-xl 2xl:text-2xl'>{name}</p> </div>
                                <div className='py-1'><span className='inline-block float-left'><CommonName>Chef : </CommonName></span> <p className='about-products-description text-lg lg:text-xl 2xl:text-2xl'>{chef}</p> </div>
                                <div className='py-1'><span className='inline-block float-left'><CommonName>Supplier : </CommonName></span> <p className='about-products-description text-lg lg:text-xl 2xl:text-2xl'>{supplier}</p> </div>
                                <div className='py-1'><span className='inline-block float-left'><CommonName>Taste : </CommonName></span> <p className='about-products-description text-lg lg:text-xl 2xl:text-2xl'>{taste}</p> </div>
                                <div className='py-1'><span className='inline-block float-left'><CommonName>Category : </CommonName></span> <p className='about-products-description text-lg lg:text-lg 2xl:text-2xl'>{category}</p> </div>
                                <div className='py-1'><span className='inline-block float-left'><CommonName>Details : </CommonName></span> <p className='about-products-description text-lg lg:text-lg 2xl:text-2xl'>{details}</p> </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ViewCoffeeDetails;