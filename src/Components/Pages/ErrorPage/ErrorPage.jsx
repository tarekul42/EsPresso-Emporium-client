import { Link } from 'react-router-dom';
import './ErrorPage.css';
import { FaArrowLeft } from 'react-icons/fa';
import CommonTitl2 from '../../Shared/CommonTitles/CommonTitle2/CommonTitl2';

const ErrorPage = () => {
    return (
        <div className="bg-[#FFF] py-7 xl:p-20">
        <div className='min-h-min w-11/12 md:w-5/6 mx-auto'>
            <div className='add-new-coffee-form'>
                {/* back button */}
                <Link to='/'>
                <div className='back-to-home w-full justify-center inline-flex items-center cursor-pointer rounded-xl'>
                        <FaArrowLeft className='common-title2 pb-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:pb-4' />
                    <CommonTitl2>
                        Back to home</CommonTitl2>
                </div>
                </Link>
                {/* the body start form here */}
                <div className='form-container rounded-md'>
                    <img className='w-full' src="./public/images/404/404.gif" alt="Your path is wrong" />
                </div>
            </div>

        </div>
    </div>
    );
};

export default ErrorPage;