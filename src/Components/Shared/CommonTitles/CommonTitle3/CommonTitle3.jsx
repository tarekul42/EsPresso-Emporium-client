import './CommonTitle3.css'

const CommonTitle3 = ({children}) => {
    return (
        <div className='common-title-third-design text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl pb-1 md:pb-2 lg:pb-3 2xl:pb-4'>
            {children}
        </div>
    );
};

export default CommonTitle3;    