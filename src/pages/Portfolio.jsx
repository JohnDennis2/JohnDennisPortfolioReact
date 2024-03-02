import ProjectCard from "../components/ProjectCard"

function Portfolio() {
  const projects = [
    {
      title: "Travel Translator App",
      description:"This app lets users translate a variety of languages.  Where a user can choose to randomize either the language they select and/ or the language that it is translated into. ",
      github: "https://github.com/JohnDennis2/translateAPP",
      live: "https://johndennis2.github.io/translateAPP/",
      image: "https://private-user-images.githubusercontent.com/153260507/297485269-f26e7900-6fec-4cd9-99e2-2312bd4ec99a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDkzMzA1NzQsIm5iZiI6MTcwOTMzMDI3NCwicGF0aCI6Ii8xNTMyNjA1MDcvMjk3NDg1MjY5LWYyNmU3OTAwLTZmZWMtNGNkOS05OWUyLTIzMTJiZDRlYzk5YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwMVQyMTU3NTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mNWFmYjQ2N2FkMjUxZGUwMDcyYzE2NDA4MDIyOGUzNzY4NGRlOWRlYzFlYTA2OTZlZjM4MDA2M2M5ZWRmMWM1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.Nr0qQtZ5bOTsU-l8V2ueHZu46fyL-0F65QsGlVEYT1M"
    },
    {
      title: "Work In Progress",
      description:"This app lets users search for jobs in a fun and simple way.  By presenting cards that show information about the job, the user can decide to choose a job or pass a job. The funcitonality of the app acts like a dating app where users can swipe left and right. If on a desktop they have th option of a yes or no button.",
      github: "https://github.com/jordaneburton/tinder-for-jobs",
      live: "https://hidden-waters-11794-4d691b730da5.herokuapp.com/login",
      image: "https://github.com/jordaneburton/tinder-for-jobs/blob/main/newScreenshot.png"
    },
    {
      title: "Weather App",
      description:"This is a weather app that uses API calls to get the current weather and a 5 day forecast of upcoming weather",
      github: "https://github.com/JohnDennis2/openAppApi",
      live: "https://johndennis2.github.io/openAppApi/",
      image: "https://github.com/JohnDennis2/openAppApi?tab=readme-ov-file"
    },
    {
      title: "Employee Tracker App",
      description:"This app uses the terminal and MySQL to create roles and other information about employees",
      github: "https://github.com/JohnDennis2/EmployeeTrackerApp",
      live: "https://app.screencastify.com/v3/watch/NTeMuc1G6picVyOQ8TUG",
      image: "https://app.screencastify.com/v3/watch/NTeMuc1G6picVyOQ8TUG"
    },
    {
      title: "Social Media App",
      description:"This app is a backend app that lets users create thoughts and reactions, as well as make friends. It functions somewhat like a social blogpost that could be used between employees",
      github: "https://github.com/JohnDennis2/SocialMediaApp",
      live: "https://app.screencastify.com/v3/watch/pnIcNqPV135R0UbjCB2X",
      image: "https://github.com/JohnDennis2/openAppApi/blob/main/assets/functioningScreenshot.png"
    }
  ]
  return (
    <div>
      <h1>Portfolio Page</h1>
      <div className="projectCards">
    {
      projects.map(project =>(
        <div >
          <ProjectCard 
           title={project.title}
           description={project.description}
           github={project.github}
           live={project.live} 
           image={project.image}/>
        </div>
      ))
}
</div>
    </div>
  );
}

export default Portfolio