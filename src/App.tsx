import './App.css'
import Sidebar from './components/Sidebar'
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Wallet from './pages/wallet'
import Analytics from './pages/analytics'
import Transactions from './pages/transactions'
import Settings from './pages/settings'



function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
    <div className="flex bg-[#24282E] min-h-screen">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden
        />
      )}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-1 p-4 pl-4 text-white md:pl-4">
        {/* Mobile header */}
        <div className="md:hidden -ml-4 -mt-4 mb-2 px-4 py-3 border-b border-white/10 flex items-center justify-between">
          <button
            className="text-white"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            {/* Hamburger icon */}
            <span className="block w-6 h-0.5 bg-white mb-1" />
            <span className="block w-6 h-0.5 bg-white mb-1" />
            <span className="block w-6 h-0.5 bg-white" />
          </button>
          <span className="font-semibold">Budget Buddy</span>
          <span className="w-6" />
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
    </>
  )
}

export default App
