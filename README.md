# Weather Task

A modern weather application built with React that provides real-time weather information for any location worldwide.

## Project Explanation

This is a weather forecasting web application that allows users to search for weather information by entering a city name or coordinates. The application fetches real-time weather data and displays it in a user-friendly interface with the following features:

- **Location Search**: Search weather by city name
- **Geocoding Integration**: Convert location names to coordinates
- **Real-time Weather Data**: Fetch current weather information including temperature, conditions, humidity, wind speed, and more
- **Error Handling**: Graceful error messages for invalid locations or API issues
- **Loading States**: Visual feedback while fetching data
- **Settings/Preferences**: Customize the application experience
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

### Frontend
- **React 19.1.1** - UI library for building interactive components
- **Vite 7.1.7** - Fast build tool and development server with HMR (Hot Module Replacement)
- **React DOM 19.1.1** - React rendering engine for the browser

### Development Tools
- **ESLint 9.36.0** - Code quality and linting
- **eslint-plugin-react-hooks** - React-specific linting rules
- **eslint-plugin-react-refresh** - Vite React refresh plugin rules

### APIs
- **Geocoding API** - Converts city names to geographic coordinates
- **Weather API** - Provides real-time weather data

## How to Run the Project

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd "weather task"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the development server with hot module reloading:

```bash
npm run dev
```

The application will typically be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be generated in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality and find linting issues:

```bash
npm run lint
```

## Project Structure

```
src/
├── App.jsx                 # Main application component
├── main.jsx                # Application entry point
├── api/
│   ├── geocoding.js       # Geocoding API integration
│   └── weather.js         # Weather API integration
├── components/
│   ├── weatherForm.jsx    # Search form component
│   ├── weatherDisplay.jsx # Weather display component
│   ├── Loader.jsx         # Loading indicator
│   ├── Error.jsx          # Error message component
│   ├── Settings.jsx       # Settings component
│   └── Help.jsx           # Help/documentation component
└── styles/
    ├── App.css            # Main styles
    └── WeatherDisplay.css # Weather display styles
```

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This project is open source and available under the MIT License.
