import './Navigation.css'

const Navigation = () => {
    return (
        <div className='navigationBar inline-flex items-center justify-center w-full h-12 md:h-20 lg:h-24 2xl:h-32'>
            <div className='flex items-center justify-center gap-2 lg:gap-4'>
                <img className='navigationImage w-10 h-10 md:h-14 md:w-14 lg:h-16 lg:w-16 2xl:w-20 2xl:h-20' src="/public/images/more/logo1.png" alt="" />
                <p className='navigationTitle text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl'>Espresso Emporium</p>
            </div>
        </div>
    );
};

export default Navigation;