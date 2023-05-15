# FoodApp

FoodApp is a mobile application built with React Native and Expo that allows users to search for restaurants and view detailed information about them. The app uses the Yelp API to fetch restaurant data.

<div align="center">
  <img src="/assets/FoodApp_screen.png" alt="FoodApp" width="200" />
  <img src="/assets/FoodApp_screen2.png" alt="FoodApp" width="200" />
  <img src="/assets/FoodApp_screen3.png" alt="FoodApp" width="200" />
  <br />
</div>

## Features

- Search for restaurants
- View details about individual restaurants, including ratings, review count, and images
- Navigate between different screens in the application
- Beautiful user interface with a gradient background and modern design

## Tech Stack

- React Native for building the mobile application
- Expo for easier development and testing of the app
- Yelp API for fetching restaurant data
- Axios for making HTTP requests to the Yelp API
- React Navigation for managing screen navigation in the app

## Installation

1. Clone this repository:

`bash git clone https://github.com/bamarin7/foodApp-rn.git`

2. Install dependencies:

`cd foodapp-rn`
`npm install`

3. Run the app with Expo:

`expo start`

## Usage

On the initial screen, you will be welcomed by the FoodApp title and a subtitle prompting you to search for your favorite foods.

Enter a search term in the search bar and press enter. The app will then display a list of restaurants related to your search term.

You can then select a restaurant to view more detailed information about it.

### Notes

Please replace <BEARER_TOKEN/> in src/api/yelp.example with your actual Yelp API key and rename to yelp.js

### Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### License

MIT
