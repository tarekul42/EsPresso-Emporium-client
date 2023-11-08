import { FaArrowLeft } from 'react-icons/fa';
import CommonTitl2 from '../../Shared/CommonTitles/CommonTitle2/CommonTitl2';
import './ViewCoffeeDetails.css'
import { Link, useLoaderData } from 'react-router-dom';

const ViewCoffeeDetails = () => {
    const loadedData = useLoaderData();
    console.log(loadedData);
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

                        <form className='px-4 py-5 md:px-10 md:py-6 lg:px-20 lg:py-12 xl:px-32 xl:py-20'>
                            </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ViewCoffeeDetails;