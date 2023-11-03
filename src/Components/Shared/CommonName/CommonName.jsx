import './CommonName.css'

const CommonName = ({children}) => {
    return (
        <div className='common-name text-lg lg:text-xl 2xl:text-2xl'>
            {children}
        </div>
    );
};

export default CommonName;