import { Outlet } from 'react-router-dom';
import { Navbar } from '../components'
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className='py-20 flex-grow'>
                {/* Outlet for rendering child components */}
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default HomeLayout