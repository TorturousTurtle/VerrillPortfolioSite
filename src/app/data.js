export const projects = [
    {
      title: "Weight Gym!",
      subtitle: "React Native Workout App",
      description:
        "Weight Gym! was the first mobile app I had the pleasure to build. A friend was looking for an app that had a different look and feel to the apps he was using at the time, and he asked me to build a prototype for him. Using a React Native frontend and Firebase for the backend, Weight Gym! allows users to pre-build and schedule workouts or build them on the fly. It tracks the work they do for each workout, which can be analyzed later on in the historical calendar screen. Users can use the exercises built into the app or add their own based on type. The app also calculates users BMI, TDEE, and other metrics based on their activity levels and body types so they have a better idea for what they should be aiming for in order to hit their fitness goals. It also tracks their personal bests, such as the most weight lifted during a deadlift, and updates the user when they beat them. It was a blast to build!",
      image: ["/weightgym/IMG_7751.png", "/weightgym/IMG_7753.png", "/weightgym/IMG_7755.png"],
      alt: "Weight Gym! A workout app for those who want to be shreddy at the ready!",
      link: "https://github.com/TorturousTurtle/WeightGym",
    },
    {
      title: "Nihongo Vocab",
      subtitle: "React Native Japanese Quiz App",
      description:
      "Nihongo Vocab is a personal project that got it's start with my desire to want to learn Japanese. There are many language and learning apps out there, but I wanted something customized to how I learn best. It began as a simple flash card app built with React Native, but I soon found myself adding more and more features. Users can shuffle their cards, start with the answer first, or use hints if they simply can't understand the Kanji. The app tracks the users progress, showing how well they've answered each Kaniji they've viewed so far or show a list of the ones that need the most practice. Random quiz buttons will start quizzes based only on Kanji the user has seen so far. Or, the user can use the Least Practiced buttons to get quizzed on the Kanji they need the most help with. Currently, the quizzes are hard coded in the app itself, but should I ever decide to try to put it on app stores I'll move that data into something like Firebase along with the user's progress data.",
      image: ["/nihongovocab/IMG_8928.PNG", "/nihongovocab/IMG_8929.PNG", "/nihongovocab/IMG_8931.PNG"],
      alt: "Nihongo Vocab. A Japanese Language Flash Card App",
      link: "https://github.com/TorturousTurtle/NihongoVocab",
    },
    {
      title: "Calendar Free Time",
      subtitle: "React and Firebase Calendar Availability App",
      description:
      "I've spent over a decade in sales, and one of the annoying and time consuming issues I often run into is trying to provide customers the availability for multiple team members in my company with Gmail. So, I decided to write a Python script that used a Google service account to pull calendar data from anyone sharing their calendars to it in order to automate that process for me. I quickly realized my colleagues could find a lot of value with it too, so I built a frontend user interface with NextJS and converted the script to Javascript and put it in a backend Express.js server for them to use. The login screen uses Firebase Authentication. Once users log in, they can choose who's availability needs to be include by clicking on their email, and they can use a dynamic search bar to quickly find the accounts they need. They then choose a start date and end date, and whether they need a 30 minute block of time or an hour. The app then sends an API request to the Express backend, which uses a Google API to find free times that are available within the timeframes given. Users can then simply click the \"Copy\" button and paste it in an email. There are some limitations currently. All times are provided in EST and only emails that have been hardcoded in can be selected from. The app was containerized using Docker and deployed in an AWS EC2 instance. In the future, I could add a feature to add calendars to the list and store all of that data in a database, but for my current use case it's been working great!",
      image: ["/calendarfreetime/calendarfreetime-login.png", "/calendarfreetime/calendarfreetime-ui.png", "/calendarfreetime/calendarfreetime-results.png"],
      alt: "A Calendar Availability Tool",
      link: "https://github.com/TorturousTurtle/CalendarFreeTime",
    },
    {
      title: "Weight Gym! Website",
      subtitle: "Next.js, Tailwind CSS, and Firebase Web App",
      description:
      "Weight Gym! originally got it’s start as a lifestyle clothing company for funny workout shirts. After building a workout app as a continuation of that idea, I realized it would be a lot of fun to build a web app where people could grab our logo and also track their progress online. The site is still under construction, but I'm building it using Next.js with a Firebase backend for authentication and to grab data users may have generated using the app. I decided to use Typescript for additional experience. I also decided to add a blog section with functionality to allow users to create new blogs depending on if they’re logged in and the role they have assigned to them. In the future, I’ll be adding an account page to show user workout information and other user data. This is a work in progress still, but feel free to check out the repo and the site itself at <a href=\"https://weight-gym-web-site.vercel.app/\" style=\"color: inherit; text-decoration: none;\">weight-gym-web-site.vercel.app</a> to see how things are going!",
      image: ["/weightgymsite/wg-site-home.png", "/weightgymsite/wg-site-blog-logged-in.png", "/weightgymsite/wg-site-contact.png"],
      alt: "A website for fitness clothes, advice, and tracking progress from the official app",
      link: "https://github.com/TorturousTurtle/WeightGymWebSite",
    },
  ];

  export const skills = ['CSS', 'HTML','Javascript', 'Typescript', 'Python', 'Java', 'C++', 'React', 'React Native', 'Node.js', 'Express.js', 'Next.js', 'Docker', 'AWS', 'UI Design', 'Mobile Apps', 'Web Apps', 'Tailwind CSS', 'SQL', 'MondoDB', 'MySQL']