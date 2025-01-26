import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <>
            <nav>
                <span className='text-4xl text-primary'>Resume website</span>
                <Outlet />
            </nav>
        </>
    );
}

export default HomeLayout