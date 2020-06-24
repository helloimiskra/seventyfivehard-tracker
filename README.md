# #75HARD Tracker

#75HARD Tracker is a Rails API with React/Redux frontend SPA meant for simple tracking of days while completing Andy Frisella's #75HARD challenge. [Click here for more information.](https://andyfrisella.com/pages/75hard-info)

Note: This application nor this user has any connection with Andy Frisella or his material.

Made with
- rails 6.0.2
- react 16.13.1
- react-redux 7.2.0
- react-router-dom 5.2.0
- redux 4.0.5
- redux-thunk 2.3.0
- react-boostrap 1.0.1

## Installation

```bash
git clone git@github.com:helloimiskra/seventyfivehard-tracker.git
cd seventyfivehard-tracker
cd seventyfivehard-backend
bundle install
rails db:migrate
rails db:seed (if you want seed data) 
rails s
cd ..
cd seventyfivehard-frontend
npm install
npm start (type 'y' when prompted)
```

## Usage

User is able to create a new user or select their name from a list of challengers. 

Once selected, user can add days by filling out a checklist to track their challenge.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
