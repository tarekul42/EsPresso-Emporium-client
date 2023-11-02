import './AboutProducts.css'

const AboutProducts = () => {
    return (
        <div className='bg-[#ECEAE3] pt-6 pb-6'>
            <div className='min-h-min w-11/12 md:w-5/6 mx-auto grid grid-cols-2 lg:grid-cols-4 items-center gap-2 md:gap-2 lg:gap-4'>
                <div className='p-1 md:p-3 lg:p-4 xl:p-9'>
                    <img className='pb-4 h-14 md:h-20' src="./public/images/icons/1.png" alt="" />
                    <h1 className='about-products-title pb-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Awesome Aroma</h1>
                    <p className='about-products-description text-base'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='p-1 md:p-3 lg:p-4 xl:p-99'>
                    <img  className='pb-4 h-14 md:h-20'src="./public/images/icons/2.png" alt="" />
                    <h1 className='about-products-title pb-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl'>High Quality</h1>
                    <p className='about-products-description text-base'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='p-1 md:p-3 lg:p-4 xl:p-99'>
                    <img className='pb-4 h-14 md:h-20' src="./public/images/icons/3.png" alt="" />
                    <h1 className='about-products-title pb-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Pure Grades</h1>
                    <p className='about-products-description text-base'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='p-1 md:p-3 lg:p-4 xl:p-99'>
                    <img className='pb-4 h-14 md:h-20' src="./public/images/icons/4.png" alt="" />
                    <h1 className='about-products-title pb-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Proper Roasting</h1>
                    <p className='about-products-description text-base'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default AboutProducts;