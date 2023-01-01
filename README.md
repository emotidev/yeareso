# 🎆 Yeareso 🎆

## 🫣 Initial Peek 🫣

![](https://devpost.com/f354c724-bc41-4497-ad33-c039f2894193)
![](https://devpost.com/96892136-ecb7-4011-84f7-8cf03bdc0887)
![](https://devpost.com/9df43b37-c223-47d8-bbdc-a0c8dfa4e109)
![](https://devpost.com/2970434b-5209-4c88-953c-dd4e3ce9e09d)

## 🎊 Your New Year's Resolution Tracker 🎊

We built Yeareso as part of Hacky New Year, a hackathon focused on building projects that help people stay on track with their New Year's resolutions. We wanted to create a platform that would not only help people set and track their resolutions, but also provide them with the support and accountability they need to actually achieve their goals.

## 💪 Inspiration 💪

We know firsthand how difficult it can be to stick to resolutions, especially as the year goes on and life gets in the way. That's why we were inspired to create Yeareso - to provide a supportive community and helpful tools for people who are committed to making positive changes in their lives.

## 🚀 What it does 🚀

Yeareso is an app that helps users set and track their New Year's resolutions. When a user signs up, they can create a resolution and set a progress goal. They can then track their progress and update their resolution as they go.

But Yeareso isn't just a simple progress tracker - it also provides users with a community of like-minded individuals who are working towards their own resolutions. Users can connect with each other, share their progress, and offer encouragement and support.

## 🛠 How we built it 🛠

Yeareso is built with Next.js for the frontend and CockroachDB and Prisma for the backend. We used Auth0 for authentication and Twilio for SMS reminders to help users stay on track with their resolutions.

Yearso has made smart use of already available technologies. Yearso uses GitHub actions to run a script that sends a text message to the user every day at 6am. This is a great way to remind the user to check in on their progress. Yearso also uses Auth0 to authenticate users. This is a great way to ensure that only the user can access their data. Yearso also uses Prisma to connect to the database. This is a great way to ensure that the database is secure and that the data is not lost.

## 📈 Challenges we ran into 📈

We ran into a lot of challenges while building Yeareso. We had to learn how to use CockroachDB, Prisma, Auth0, and Twilio.

The most challenging part of the project was figuring out how to use CockroachDB and Prisma together to create/update user based on the current state of the DB without making our application a memory hogger. After many hours of research and trial and error, we were able to figure out a solution that worked. The `upsert` function in prisma. Weird name, but it does exactly what we needed it to do.

Weird names didn't leave us there, the login ui for Auth0 was apparently called a API, which snapped a lot of our time in just figuring out the UI before we occasionally found the endpoint.

We also faced a lot of challenges with the Twilio API. We had to figure out how to send a text message to a user every day at 6am. We decided to use GitHub actions to run a script that sends a text message to the user every day at 6am. This is a great way to remind the user to check in on their progress.

## 🏆 Accomplishments that we're proud of 🏆

We're proud of the fact that we were able to build a fully functional app in just 48 hours. We're also proud of the fact that we were able to learn how to use CockroachDB, Prisma, Auth0, and Twilio.

## 📚 What we learned 📚

We learned how to use CockroachDB, Prisma, Auth0, and Twilio.

We learned how to think out of the box and use tools differently than they were intended to be used. Just like how we used github action as a scheduling service instead of a CI/CD service.

## 🚧 What's next for Yeareso 🚧

We plan to add more features to Yeareso, including:
- A calendar that shows the user's progress over time
- A leaderboard that shows the user's progress compared to other users
- A way for users to connect with each other and share their progress

We plan to make Yearso also available as a mobile app in the soon future.
