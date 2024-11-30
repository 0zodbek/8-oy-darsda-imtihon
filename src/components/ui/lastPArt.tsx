import React, { useEffect, useState } from 'react';
import scanner from "../../assets/scanner.svg"
interface Competency {
  label: string;
  percentage: number;
  color: string; // Ensure the API provides this property
}

const CompetencyDashboard: React.FC = () => {
  const [competencies, setCompetencies] = useState<Competency[]>([]);

  useEffect(() => {
    const fetchCompetencies = async () => {
      const response = await fetch('https://trello.vimlc.uz/competence');
      const data: Competency[] = await response.json();
      setCompetencies(data);
    };

    fetchCompetencies();
  }, []);

  return (
    <div className="bg-white p-6 mx-auto w-full">
      <h2 className="text-3xl border-s-8 border-[#0956AF] font-bold mb-6 ml-28 text-black">Компетенцияларнинг намоён бўлиши</h2>
      <div className="flex justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competencies.map((competency, index) => (
            <div key={index} className="flex flex-col items-center w-96">
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 36}`}
                    strokeDashoffset={`${2 * Math.PI * 36 * (1 - competency.percentage / 100)}`}
                    stroke={competency.color} // Dynamically set the stroke color from API data
                    className="transition-all duration-500 ease-in-out"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                  {competency.percentage}%
                </span>
              </div>
              <span className="text-sm text-center mt-2">{competency.label}</span>
            </div>
          ))}
        </div>
        <div className="w-32 h-32 bg-transparent flex items-center justify-center text-gray-400">
          <img
            src={scanner}
            alt="Placeholder"
            className="w-40 h-40 mr-52 mt-28"
          />
        </div>
      </div>
      <div className="mt-8 flex justify-between items-center">
        <span className="text-sm text-gray-500 m-auto mt-12">Argos.uz 2024</span>
      </div>
    </div>
  );
};

export default CompetencyDashboard;
