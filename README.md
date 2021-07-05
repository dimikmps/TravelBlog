# InstaBlog
## A Dubai Landmarks Travel Blog variant

InstaBlog is a reactive travel blog that showcases the best that Dubai has to offer! 

Please do feel free to provide with any feedback.

## Getting started
Install any dependencies via npm install.

### Back-end deployment
```sh
cd be-client
npm start
```

### Front-end deployment
```sh
cd fe-client
ng serve
```

## Capabilities
- All users can view a list of all available landmarks, ordered by their respective DB-based ordering
- A range of landmark details are depicted within a card which also provides access to its full details via clicking the action button or the landmark's title.
- Each landmark's detailed view further provides:
    - Its full description
    - Capability of viewing the landmark's full-size photo
    - Capability of visiting the landmark's official website
    - A provisioned embedded map depicting the landmark's location based on the coordinates stored in the DB
- Login functionality provides admins with the capability of editing the landmark's details
- Uploading a photo (no larger than 5MB) automatically generates a thhumbnail version to be used where applicable

## Tech
InstaBlog is built upon :
- MongoDB
- Express
- Angular
- Angular Material
- NodeJS
- Parse (1.11.1)
- Parse Server (2.7.4)
- Multer
- Sharp
- SweetAlert
