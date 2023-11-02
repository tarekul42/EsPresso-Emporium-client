import './CommonTile2.css';

const CommonTitl2 = ({children}) => {
    return (
        <div className='common-title2 pb-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:pb-4'>
            {children}
        </div>
    );
};

export default CommonTitl2;