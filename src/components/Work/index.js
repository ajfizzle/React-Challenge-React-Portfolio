import React from "react";
import cuisineCompassImage from "../../assets/bootcamp/Cuisine-compass.png";
import employeePayrollTrackerImage from "../../assets/bootcamp/employeePayrollTracker.png";
import weatherDashboardImage from "../../assets/bootcamp/Weather-Dashboard.png";
import myFirstBlogImage from "../../assets/bootcamp/first-blog.png";

function Work() {
  const projects = [
    {
      title: "Cuisine Compass",
      description:
        "Cuisine Compass is an innovative MERN stack application designed to connect food enthusiasts with a wide array of culinary experiences. It features user authentication, personalized recommendations based on user preferences, and interactive maps to explore local eateries. The platform facilitates live Q&A sessions with culinary experts and enables optional donations to support local businesses.",
      imageUrl: cuisineCompassImage,
      link: "https://github.com/ajfizzle",
    },
    {
      title: "Employee Payroll Tracker",
      imageUrl: employeePayrollTrackerImage,
      description:
        "Employee Payroll Tracker is a robust web application designed to streamline the management of employee salaries and working hours for businesses of all sizes. Utilizing technologies like Node.js and MongoDB, this tool allows employers to effortlessly input, update, and track payroll data in real-time. Features include automatic calculations of wages based on hourly rates, generation of comprehensive payroll reports, and the ability to handle adjustments for overtime and deductions. This application ensures accuracy and efficiency in payroll management, making it an essential tool for HR departments.",
      link: "https://ajfizzle.github.io/employee-payroll-tracker/",
    },

    {
      title: "Weather Dashboard",
      imageUrl: weatherDashboardImage,
      description:
        "Weather Dashboard offers real-time weather updates and forecasts for cities worldwide. Utilizing OpenWeather API, it provides detailed information on temperature, humidity, wind speed, and more. This tool is indispensable for planning daily activities and trips, offering both current conditions and five-day forecasts to keep users well-prepared for any weather.",
      link: "https://ajfizzle.github.io/Server-Side-APIs-Challenge",
    },
    {
      title: "My First Blog",
      imageUrl: myFirstBlogImage,
      description:
        "My First Blog is a personal blogging platform where users can express their thoughts, share insights, and engage with a broader online community. Developed using HTML, CSS, and JavaScript, it features a simple yet powerful editor for writing articles, a comment section for reader interactions, and robust security features to ensure a safe sharing environment.",
      link: "https://ajfizzle.github.io/Web-APIs-Challenge-Personal-Blog",
    },
  ];

  return (
    <div>
      <section id="work">
        <div className="section-container">
          <h2 className="section-title">Work</h2>
          <div className="section-border">
            {projects.map((project, index) => (
              <div className="box-wrapper" key={index}>
                <div className="secondary-box">
                  <div className="secondary-title">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} project cover`}
                      className="my-2"
                      style={{ width: "100%" }}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
