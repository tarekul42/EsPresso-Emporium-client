import CommonDescription from '../../../Shared/CommonDescription/CommonDescription';
import CommonTitle1 from '../../../Shared/CommonTitles/CommonTitle1/CommonTitle1';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container flex h-full md:min-h-screen md:items-center justify-center md:justify-end'>
                <div className='banner-description-container w-11/12 md:w-3/4 lg:w-2/3 pt-28 pb-72 md:p-24 lg:p-28 xl:p-40 2xl:p-64'>
                    <CommonTitle1>Would you like a Cup of Delicious Coffee?</CommonTitle1>
                    <CommonDescription>It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</CommonDescription>
                {/* button is here */}
                <button className='banner-button text-base h-9 w-20 md:text-2xl md:h-12 md:w-32'>Learn More</button>
                </div>
        </div>
    );
};

export default Banner;