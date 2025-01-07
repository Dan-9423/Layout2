import { ThemeProvider } from './components/ThemeProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBanner from './components/TopBanner';
import WelcomeBanner from './components/WelcomeBanner';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-[#111111]">
          <div className="max-w-[1600px] mx-auto flex">
            <Sidebar />
            <main className="flex-1 p-8">
              <TopBanner />
              <Routes>
                <Route path="/" element={<WelcomeBanner />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;