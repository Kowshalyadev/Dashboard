// src/components/Insights.jsx
export default function Insights() {
    return (
      <div className="bg-[#161b2d] p-6 rounded-lg flex-1">
        <h2 className="text-xl font-semibold mb-6">Insights</h2>
  
        <div className="space-y-6">
          <div>
            <div className="text-2xl font-bold">7.4K</div>
            <div className="text-gray-400">Founders</div>
          </div>
  
          <div>
            <div className="text-2xl font-bold">6.09K</div>
            <div className="text-gray-400">Investors</div>
          </div>
        </div>
  
        <div className="mt-8 text-blue-400 cursor-pointer">
          View detailed insights →
        </div>
      </div>
    );
  }
  