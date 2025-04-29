// src/components/Demographics.jsx
export default function Demographics() {
    return (
      <div className="bg-[#161b2d] p-6 rounded-lg flex-1">
        <h2 className="text-xl font-semibold mb-6">Demographics</h2>
  
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-gray-400 mb-1">
              <span>India</span>
              <span>40%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full w-[40%]"></div>
            </div>
          </div>
  
          <div>
            <div className="flex justify-between text-gray-400 mb-1">
              <span>USA</span>
              <span>25%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full w-[25%]"></div>
            </div>
          </div>
  
          {/* Add more countries if you want */}
        </div>
      </div>
    );
  }
  