import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Header/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;