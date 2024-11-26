import { FC, useEffect, useState } from "react";

interface ChartData {
  percentage: number;
  label: string;
  color: string;
}

const KnowlodgePage: FC = () => {
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    fetch("https://trello.vimlc.uz/knowlodge")
      .then((response) => response.json())
      .then((result) => setData(result.semicharts))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-8 w-[644px] bg-white font-sans">
      <div className="mb-8">
        <h2 className="text-[24px] font-bold text-black">Билим тесты</h2>
        <div className="w-16 h-[3px] bg-blue-600 mt-2"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative">
              <svg
                className="w-[140px] h-[70px]"
                viewBox="0 0 36 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 1 18 A 17 17 0 0 1 35 18"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="2.5"
                />
                <path
                  d="M 1 18 A 17 17 0 0 1 35 18"
                  fill="none"
                  stroke={item.color}
                  strokeWidth="2.5"
                  strokeDasharray={`${(item.percentage / 100) * 53.38}, 53.38`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[32px] mt-7 font-bold text-black">
                  {item.percentage}%
                </span>
              </div>
            </div>
            <p className="mt-4 text-center text-[14px] leading-[1.4] text-gray-700">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowlodgePage;
 