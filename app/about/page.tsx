import React from "react";
import portfolio from "@/data/portfolio.json";

const About = () => {
  return (
    <div className=" flex items-center " id="about">
      <div className="flex flex-col gap-4 pt-10 pb-10 dark:text-white w-full">
        <div className="flex flex-col gap-2 mb-2 md:mb-4">
          <h2 className="text-4xl font-serif font-semibold">About Me</h2>
          <span className="w-16 h-[4px] bg-rose-500 rounded"></span>
          <span className="w-8 h-[4px] bg-rose-500 rounded"></span>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-4 lg:gap-6 justify-between items-center">
          <div className="w-full flex flex-col items-stretch gap-4">
            <div className="flex flex-col sm:flex-row gap-2 md:gap-6 items-center justify-between font-serif">
              <ul className="w-full text-gray-900 dark:text-gray-200">
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Birthday :</span>{" "}
                  {portfolio.personalInfo.birthday}
                </li>
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Website :</span>{" "}
                  {portfolio.personalInfo.website}
                </li>
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Degree :</span>{" "}
                  {portfolio.personalInfo.degree}
                </li>
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Location :</span>{" "}
                  {portfolio.personalInfo.location}
                </li>
              </ul>

              <ul className="w-full text-gray-900 dark:text-gray-200 font-serif">
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Email :</span>{" "}
                  {portfolio.personalInfo.email}
                </li>
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Phone No :</span>{" "}
                  {portfolio.personalInfo.phone}
                </li>
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Employment :</span>{" "}
                  {portfolio.personalInfo.employment}
                </li>
                <li className="py-2 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-bold">Freelance :</span>{" "}
                  {portfolio.personalInfo.freelance}
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2">
            {portfolio.skills.map((skill, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="w-full flex justify-between font-semibold">
                  <span>{skill.name}</span>
                  <span>{skill.level} %</span>
                </div>

                <div className="w-full bg-gray-300 rounded-full">
                  <div
                    className="h-2 bg-rose-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
