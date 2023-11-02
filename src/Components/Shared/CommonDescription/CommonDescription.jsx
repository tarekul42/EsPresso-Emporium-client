import './CommonDescription.css';

const CommonDescription = ({children}) => {
    return (
        <div className='common-description text-base lg:text-base 2xl:text-2xl pb-1 md:pb-2 lg:pb-3 2xl:pb-4'>
            {children}
        </div>
    );
};

export default CommonDescription;