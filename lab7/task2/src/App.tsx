import { lazy, Suspense } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import ErrorFallback from './components/ErrorFallback'
import LoadingSpinner from './components/LoadingSpinner'

// Ленивая загрузка страниц
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Settings = lazy(() => import('./pages/Settings'))
const Profile = lazy(() => import('./pages/Profile'))
// Страница с ошибкой для тестирования
const BuggyPage = lazy(() => import('./pages/BuggyPage'))

function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <div>
        {/* Навигация */}
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
          <Link to="/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>
          <Link to="/settings" style={{ marginRight: '1rem' }}>Settings</Link>
          <Link to="/profile" style={{ marginRight: '1rem' }}>Profile</Link>
          <Link to="/buggy" style={{ color: 'red' }}>Test Error</Link>
        </nav>

        {/* Suspense внутри ErrorBoundary */}
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/buggy" element={<BuggyPage />} />
          </Routes>
        </Suspense>
      </div>
    </ErrorBoundary>
  )
}

export default App