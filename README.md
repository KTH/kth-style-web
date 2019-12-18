# kth-style-web

The purpose of this project is to provide the essential design and style for applications within KTH and make the development process of these applications faster.

This is a web application that serves as an example of the design it self and a documentation guide on how to use the design provided by KTH Style. KTH Style is the base/foundation of the design we use at KTH but not the complete set of all design elements for all applications.

KTH Style is build to fit and be a part of our node templates but could also be used in any application if the application it self fetch the design resourses and follows the main structure the design is based upon.

## How to set up and run kth-style-web on your local machine

Run the following commands to get it up and running

```
$ git clone git@github.com:KTH/kth-style-web.git

$ npm install
```

Create a .env file in the root of the project and include LDAP configuration for these environment variables:

```
# LDAP settings
LDAP_URI=ldaps://USERNAME@ref.ug.kth.se@ldap.ref.ug.kth.se
LDAP_PASSWORD=PASSWORD
```

Build the application and start watching file changes:

```
$ npm run build-dev
```

If you use VSCode, run the application from Debug mode by adding this to the configursation array:

```
"env": {
  "NODE_ENV": "development"
},
```

Start the application from the debug "Play" button and go to http://localhost:3000/style in your web browser.
