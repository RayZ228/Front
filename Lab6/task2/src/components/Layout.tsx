import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav style={{padding: '1rem', background: '#f0f0f0'}}>
                <Link to="/"style={{marginRight: '1rem'}}> Home</Link>
                <Link to="/courses" style={{ marginRight: '1rem' }}>Courses</Link>
                <Link to="/about">About</Link>
            </nav>
            <main style={{padding: '2rem'}}>
                <Outlet />
            </main>
            <footer style={{padding: '1rem', textAlign:'center'}}>
                Student Portal 2026
            </footer>
        </>
    );
};

export default Layout;