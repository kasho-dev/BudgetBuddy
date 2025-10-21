import AddWallet from "../components/AddWallet";
import AddTransaction from "../components/AddTransaction";
import { 
   CircleUserRound,
   Ellipsis,
   CircleArrowDown, 
   TrendingDown
  } from "lucide-react";
import { designTokens } from "../design-tokens";

function Dashboard() {
  return (
    <div>
      <div className="flex items-center justify-between mr-6">
        <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
        <div className="flex gap-3">
          <AddWallet />
          <AddTransaction />
          <CircleUserRound />
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        {/* Left column - Total Balance, Income, Expense */}
        <div className="flex flex-col gap-4">
          {/*TOTAL BALANCE CARD*/}
          <div className="relative border border-[#282828] rounded-lg p-6 h-58 w-[42.5rem] text-white" style={{ backgroundColor: designTokens.colors.card.background }}>
             <div className="flex items-center justify-between">
             <div className="text-[#A0A0A0] text-sm font-normal mb-2">Total Balance</div>
             <button 
               className="p-1 hover:bg-gray-700 rounded transition-colors"
               aria-label="Card options"
             >
               <Ellipsis className="w-5 h-5" />
             </button>
             </div>
            <div className="text-white text-3xl font-bold mb-4">$59,750.00</div>
            
            {/* Simple Line Chart */}
            <div className="relative h-16 w-full">
              <svg className="w-full h-full" viewBox="0 0 200 60">
                {/* Red line */}
                <path
                  d="M 10 45 Q 30 35 50 40 Q 70 30 90 25 Q 110 35 130 20 Q 150 30 170 35 Q 190 40 200 45"
                  stroke="#ef4444"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Green line */}
                <path
                  d="M 10 50 Q 30 25 50 35 Q 70 20 90 30 Q 110 15 130 25 Q 150 20 170 30 Q 190 25 200 40"
                  stroke="#22c55e"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              
              {/* Month labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-[#A0A0A0]">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </div>
          
          {/* TOTAL INCOME/EXPENSE CARDS */}
          <div className="flex gap-2">
            <div className="border border-[#27B072] bg-[#27B072] rounded-lg p-6 h-30 w-[21rem] text-[#326856]">
              <p className="text-2xl font-normal">Total Income</p>
            <div className="flex items-center gap-1">
            <CircleArrowDown className="w-7 h-7 mt-1"/>
              <h1 className="text-3xl font-bold">$59,750.00</h1>
            </div>
            </div>
            <div className="border border-[#E54239] bg-[#E54239] rounded-lg p-6 h-30 w-[21rem] text-[#F3BDB4]">
            <p className="text-2xl font-normal">Total Expense</p>
            <div className="flex items-center gap-1">
            <CircleArrowDown className="w-7 h-7 mt-1"/>
            <h1 className="text-3xl font-bold">$59,750.00</h1>
            </div>
            </div>
          </div>
        </div>

        {/* Right column - Highest Expense and Category Insights */}
        <div className="flex flex-col gap-4 w-[58rem]">
          {/*HIGHEST Expense Card*/}
          <div className="border border-[#282828] rounded-lg p-6 h-28 text-white" style={{ backgroundColor: designTokens.colors.card.background }}>
            <div className="flex items-center justify-between">
              <div className="text-[#A0A0A0] text-sm font-normal mb-2">Highest Expense</div>
              <button 
                className="p-1 hover:bg-gray-700 rounded transition-colors"
                aria-label="Card options"
              >
                <Ellipsis className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="text-white text-3xl font-bold">$59,750.00</div>
              <TrendingDown className="w-5 h-5 text-red-500" />
            <div className="text-[#A0A0A0] text-sm">10% Higher than last month</div>
            </div>
          </div>
          
          {/*Category Insights Card*/}
          <div className="border border-[#282828] rounded-lg p-6 h-78 text-white" style={{ backgroundColor: designTokens.colors.card.background }}>
            <div className="flex items-center justify-between h-full">
              {/* Donut Chart */}
              <div className="relative w-48 h-48">
                {/* Sample data for categories */}
                {(() => {
                  const data = [
                    { name: 'Shopping', value: 35, color: '#eab308' },
                    { name: 'Entertainment', value: 20, color: '#a855f7' },
                    { name: 'Travel', value: 15, color: '#3b82f6' },
                    { name: 'Grocery', value: 15, color: '#ef4444' },
                    { name: 'Others', value: 15, color: '#6b7280' }
                  ];
                  
                  let cumulativePercentage = 0;
                  
                  return (
                    <div className="relative w-full h-full">
                      {/* Donut chart using conic-gradient */}
                      <div 
                        className="w-full h-full rounded-full"
                        style={{
                          background: `conic-gradient(
                            ${data.map((item, index) => {
                              const startAngle = cumulativePercentage;
                              const endAngle = cumulativePercentage + item.value;
                              cumulativePercentage += item.value;
                              return `${item.color} ${startAngle}% ${endAngle}%`;
                            }).join(', ')}
                          )`
                        }}
                      >
                        {/* Inner circle to create donut effect */}
                        <div className="absolute inset-4 bg-[#222933] rounded-full"></div>
                      </div>
                      {/* Center percentage */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-3xl font-bold">77%</span>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Legend */}
              <div className="flex flex-col gap-3 ml-6">
                <h3 className="text-[#A0A0A0] text-2xl font-light">Category Insight</h3>
                <div className="flex flex-col gap-2">
                  {[
                    { name: 'Entertainment', color: 'bg-purple-500', value: '$2,400' },
                    { name: 'Shopping', color: 'bg-yellow-500', value: '$4,200' },
                    { name: 'Travel', color: 'bg-blue-500', value: '$1,800' },
                    { name: 'Grocery', color: 'bg-red-500', value: '$1,800' },
                    { name: 'Others', color: 'bg-gray-500', value: '$1,800' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 ${item.color} rounded`}></div>
                        <span className="text-white text-lg font-light">{item.name}</span>
                      </div>
                      <span className="text-[#A0A0A0] text-lg">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
