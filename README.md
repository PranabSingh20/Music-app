# Demo

![ss1](https://user-images.githubusercontent.com/72071559/153709140-6c595985-fbf3-4c43-a532-ea79f766a5e3.jpg)
![ss2](https://user-images.githubusercontent.com/72071559/153709145-d3dd3df9-66f9-45c2-ac1c-5ca127170f60.jpg)

# Setup

>1. You need to create an app in [https://developer.spotify.com/dashboard/applications](https://developer.spotify.com/dashboard/applications)
  as the project needs access token of the account to access the user info.
>2. Then go to edit settings and add [http://localhost:3000/](http://localhost:3000/) in the redirect URIs
>3. Replace the clientID in authenticator.js with your clientID and the redirect URI to [http://localhost:3000/](http://localhost:3000/)
>4. Then just start the project(npm init -> npm start).

# Notes

The spotify api only gives the music playing access to premium users so you will only be able to search and see the lyrics if you\
do not have a premium account

