import AddWallet from "../components/AddWallet";
import AddTransaction from "../components/AddTransaction";
import {CircleUserRound} from 'lucide-react'

function Dashboard() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
        <div className="flex gap-3">
        <AddWallet />
        <AddTransaction />
        <CircleUserRound />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="bg-[#34373D] rounded-md p-4 h-24"></div>
        <div className="bg-[#34373D] rounded-md p-4 h-24"></div>
        <div className="bg-[#34373D] rounded-md p-4 h-24"></div>
      </div>
    </div>
  );
}

export default Dashboard;
