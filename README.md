# Samanta Martínez Test

This is a basic UI implementation for Zemoga.
## Project Basics.

This project was built with a basic react + firebase integration.
### Installing the project.

First clone this repo with the following command `git clone https://github.com/mssroboto/rule-of-thumb.git` then nav to the root of the project `cd rule-of-thumb` and then run `npm install`. Please make sure that you are using an updated version of Node (Node 15 if possible).

### Running the project.

After you have completed the installation all you need to do is running `yarn start` or `npm start`. We use yarn to handle the dependencies. Yarn makes sure that all the dependencies in the project are up to date and don't have any versioning conflict.

### Building the project.

If you need to deploy the project to production run `yarn build` and a folder with all the bundle should be created and ready to be uploaded to your server.
### Project Framework and Tools.

This project uses the test version of a ***Firebase realtime database**** which has been connected to the project with a basic integration with ***React.js***. Right now the environment variables are exposed into the github repo so anyone can download it and run it but in a real life scenario the .env file shouldn't be in github. Firebase was used to do a basic get request and a basic post request.

#### Database and Data structure.

The database is composed by an object which contains all the sections in the page. The core of the app is the 'characters' object which could be abstracted into it's own database in the future.
#### Component structure.

The project is composed by one main component ***Home.js*** which contains all the secondary components. Also we have a ***Placeholder*** component that is used as a placeholder for all the other routes in the application. Each component has it's own .scss file to handle the styles.

The app also uses ***reactHooks*** to handle the component's states.

#### Component styling.

The layout folder includes common mixins, variables and utils that can be reused in any component. This app uses css grid to handle the page responsiveness.
### Cool features

***Dynamic Hero and Character cards*** This feature allows us to change the featured character in the hero by just changing one value in the database. If we go to the 'character' object and switch the value 'featured' to true, then we will be able to highlight any character into the main hero component.

***Collapsible Nav in mobile*** The navigation has been build as a collapsible drawer in mobile to provide a better user experience.

***Real links*** The characters have been linked to their own wikipedia pages, so when you click on the hero button, you will be able to see the real character information.

***Real time database integration*** Each time you vote, your vote will be stored in a real database so other users of the app will be able to see the real vote count at any time.

#### Pending tasks and future upgrades.

***Create the login and sign up page*** Firebase provides useful tools to handle the login and sign up in any app. It would be nice to add the Firebase.auth integration to handle this components.

***Create a provider and handle the data with consumers*** It would be nice to handle the data requests with a main provider component that could be instantiated just one time and could handle all the calls to firebase and then other components could subscribe to the information by using consumers.

***Add unit tests*** This project already runs jest to handle unit testing. By the restrictions of time it wasn't possible to add unit tests but it would be nice to add those.

### Contact.
If you have any doubts don hesitate to contact the author - Samanta Martinez - Lsmartinezru@gmail.com