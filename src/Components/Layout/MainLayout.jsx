import Navigation from '../Shared/Header/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navigation/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;