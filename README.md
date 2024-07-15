# Weather App

A sleek and responsive weather application built with modern web technologies. This app provides real-time weather information for any city, featuring a clean and intuitive user interface.

## Features

- Real-time weather data display
- Search functionality for any city worldwide
- Responsive design that works on desktop and mobile devices
- Displays temperature, weather condition, location, and last update time
- Utilizes OpenWeatherMap API for accurate weather information

## Technologies Used

- HTML5
- CSS3 (with Tailwind CSS for styling)
- JavaScript (ES6+)
- Vite (for build tooling and development server)
- OpenWeatherMap API

## Getting Started

### Prerequisites

- Node.js (version 12.0 or later)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. Install the dependencies:

```bash
npm install
```


3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

```bash
VITE_WEATHER_API_KEY=your_api_key_here
```

### Running the App

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

To create a production build:

```bash
npm run build
```


The built files will be in the `dist` directory.

## Usage

- The app initially displays weather for San Francisco.
- To check the weather for a different city, type the city name in the search bar and press Enter.
- The app will update with the current weather information for the searched city.

## Customization

- You can modify the `tailwind.config.js` file to customize the app's appearance.
- The main logic is in `main.js`, which you can edit to add more features or change existing functionality.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons by [Heroicons](https://heroicons.com/)
