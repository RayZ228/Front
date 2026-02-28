import { lazy, Suspense} from "react";
import { Routes, Route, Link } "from react-router-dom"
import LoadingSpinner from './components/LoadingSpinner'

const DashBoard = lazy(()=> import ('./pages/Dashboard'))
const Settings  = lazy(()=> import ('./pages/Settings'))
const Profile  = lazy(()=> import ('./pages/Profile'))

function App() {
    return (
        <div>
            <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
                <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
                <Link to="/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>
                <Link to="/settings" style={{ marginRight: '1rem' }}>Settings</Link>
                <Link to="/profile">Profile</Link>
            </nav>

            <Suspense fallback = {<LoadingSpinner />}>
                <Routes>
                    <Route path='/' element={<h1>HomePage (loads immediately)</h1>} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App