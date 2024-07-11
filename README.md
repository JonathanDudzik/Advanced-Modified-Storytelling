# Project overview
This single-page application (SPA) is focused on storytelling. As an instructional designer by trade, I know that storytelling is important for education, but it is also important in marketing, journalism, entertainment, and other fields. My design goal was to integrate all kinds of media in a beautiful and accessible way; throughout this example, I have used images, audio, videos, animations, and even a quiz to help tell a story.

# Intuitive vertical navigation
The banner is designed to capture the audience's attention and offers a simple video providing basic instructions for navigating the web app. Including such a video is an instructional design best practice, particularly useful when there is something novel about the navigation. In this case, there is a hamburger menu instead of a sticky top navigation bar. Additionally, instead of the common slide-based left and right navigation found in e-learning, this SPA makes it easy for the audience to engage with the story by vertically aligning the content and using scrolling navigation.

The navigation menu looks and works great on both desktop and mobile screen sizes. In its closed state, the hamburger menu icon does not take up much screen space, but clicking it creates a clean, full-sized menu listing the sections of the application. From there, the audience can freely navigate to any section they choose. Though I could have restricted navigation to ensure each section was viewed in order, I chose open (compared to closed) navigation for this example.

# Media alternatives, information chunking, and completion
I wanted the user to be able to experience the story through audio, images, and text. This SPA makes it easy to switch between audio and text. Buttons that switch content formats always display a tooltip when hovered over. Tooltips are a best practice in instructional design, web accessibility, and UX.

In one section, I have taken a large amount of dialogue and separated it into smaller, bite-sized chunks. Chunking content like this is another instructional design best practice that enables the audience to experience the story at their own pace.

Finally, I have included a simple four-question quiz for recording completion. The quiz is scored, but it is just the beginning of what would be needed to have a user's score sent and saved on a server. Upon successfully passing the quiz, the SPA provides a hook to send an API call to a server and a button that could be configured to perform any action you want your audience to take before leaving.

# Focus on education and user experience standards
The SPA is purposefully designed for both mobile and desktop screens. The UI and UX were vetted by a formally educated UI/UX professional (Mariana Pulgarin). Furthermore, as an instructional designer by trade, I paid close attention to the educational merit and organization of the content to ensure it was pedagogically sound and effective.

# Technical simplicity for easy hosting, maintainability, and modifications
From a technical standpoint, this SPA consists of HTML, CSS, and JavaScript contained in a single folder that can be hosted almost anywhere and opened in any modern browser. Updating the content or styles is as simple as using a text editor to modify a single “index.html” file and some logically organized CSS.

# Development lifecycle and best practices
Being that I have kept this SPA as simple as possible, there is a standard and modern workflow for application development that provides the following benefits:
- Faster onboarding for developers
- Consistency across any hosting environment, including local, cloud, or on-premise
- Version-control with Git
- Issues reproduced and tracked easily
- Detailed audit trail for all changes.
- Reduced risk of unwanted changes and the ability to correct them before they go into production.
- Changes can require code peer-review, approval, and tests before being deployed into the production environment.
- Continuous integration and continuous deployment (CI/CD) is possible.

# Conclusion
This SPA represents a significant effort on my part to make digital storytelling the best it can be, with interactive elements, alternative ways to experience the story, and an appealing and accessible design. It is an excellent starting point for clients who want a modern way to reach their audience and bring information about a product, experience, or skill to life. It has high UX and instructional design standards built-in, is based on simple technology, and offers a development lifecycle that adheres to best practices.

# build process
`npm run build:css`

## Copy required folders:
1. npm run build
2. copy "img" and "index.html" into "build"
3. deploy build folder

## Z-INDEX MAPPPING:
* .navigation__button = 2000;
* .popup = 9999
* .instructions = 9999

# Future Ideas:
* Include right horizontal side content that can be manipulated on scrolling (a progress bar amd extended na bar)
* Add accordian section
* Add branching functions
* Add canvas starry bg to logo image
* Create AOS animation that will animate the secondary headings
* Each section of your portfolio site should cover exactly one feature
* The first page of the portfolio site should be an icon menu to the sections/features
* Copy the index.html, AOS css and js, and img to build folder with your scripts
* Use poper.js to showcase Accessibility points
