import React, { useState } from "react";

const CategoryIcons = {
  "Backend Engineering": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "Cloud Deployment": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M1.125 10.156h15.875c0.594 0 1.125 0.531 1.125 1.125v2.625c0 0.625-0.531 1.125-1.125 1.125h-15.875c-0.625 0-1.125-0.5-1.125-1.125v-2.625c0-0.594 0.5-1.125 1.125-1.125zM16.75 12.844v-0.5c0-0.188-0.188-0.375-0.375-0.375h-2c-0.219 0-0.375 0.188-0.375 0.375v0.5c0 0.219 0.156 0.375 0.375 0.375h2c0.188 0 0.375-0.156 0.375-0.375zM1.125 15.906h15.875c0.594 0 1.125 0.5 1.125 1.125v2.625c0 0.625-0.531 1.125-1.125 1.125h-15.875c-0.625 0-1.125-0.5-1.125-1.125v-2.625c0-0.625 0.5-1.125 1.125-1.125zM16.75 18.594v-0.5c0-0.188-0.188-0.375-0.375-0.375h-2c-0.219 0-0.375 0.188-0.375 0.375v0.5c0 0.219 0.156 0.375 0.375 0.375h2c0.188 0 0.375-0.156 0.375-0.375zM1.125 21.656h15.875c0.594 0 1.125 0.5 1.125 1.125v2.625c0 0.625-0.531 1.125-1.125 1.125h-15.875c-0.625 0-1.125-0.5-1.125-1.125v-2.625c0-0.625 0.5-1.125 1.125-1.125zM16.75 24.344v-0.5c0-0.219-0.188-0.375-0.375-0.375h-2c-0.219 0-0.375 0.156-0.375 0.375v0.5c0 0.219 0.156 0.375 0.375 0.375h2c0.188 0 0.375-0.156 0.375-0.375zM17 9.313h-15.875c-0.188 0-0.375 0.031-0.531 0.094l1.906-2.594c0.375-0.5 1.188-0.906 1.813-0.906h9.5c0.594 0 1.406 0.406 1.781 0.906l1.938 2.594c-0.188-0.063-0.375-0.094-0.531-0.094z"></path>
    </svg>
  ),
  "Sunshine and Rainbows": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      stroke="currentColor"
      strokeWidth="0.5"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
      <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>

    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Backend Engineering": [
      "Authentication and authorization systems (e.g., OAuth, JWT)",
      "RESTful API development and integration",
      "Performance optimization and scalability solutions",
    ],
    "Cloud Deployment": [
      "Containerization and orchestration (Docker, Kubernetes, etc)",
      "CI/CD pipeline implementation and automation (GitHub Actions)",
      "Infrastructure setup and management (AWS and self hosting)",
    ],
    "Sunshine and Rainbows": [
      "Collaborative and joyful personality",
      "Enjoy a plethora of activites (rock climbing, reading, camping, etc)",
      "Very funny (trust me)",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-4 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-8 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[650px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[300px] md:max-w-none overflow-hidden"> {/* test on phones and see if the truncation needs to made bigger */}
                    <span className="block truncate text-[var(--white)] text-xl">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-lg">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
