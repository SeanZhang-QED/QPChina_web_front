# qp-frontend Project

## Project Structure
- `/public`
  - `index.html`: main html for the whole project
- `/src`
  - `/src/assets`: Images, SVGs
  - `/src/components`: Vue component files
  - `/src/router`: Vue router configuration files
  - `/src/utils/`
    - `validate.js`: Validation functions
    - `constants.js` : Some constants, like base-url et al
  - `/src/App.vue`: Main Vue template for the project


## Template Structure

- .app-header
  - Navbar
- .app-body
  - Dialog
    - Login
    - Signup    
  - .router-view
    - Home
    - AllEvent
    - LiveEvent
    - (All pages' components should be here)...

## After cloning, run the code below to install all the dependencies
```
npm intall
```

## Compiles and hot-reloads for development
```
npm run serve
```
