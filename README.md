# 🌦️ Weather Dashboard

A beautiful and responsive weather dashboard application that provides real-time weather information with an elegant UI. Built with Node.js, Express, and the OpenWeatherMap API, this application delivers current weather conditions with an aesthetically pleasing interface.

![Weather Dashboard Preview](https://img.shields.io/badge/Status-Active-success) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

## ✨ Features

- 🌍 **Real-time Weather Data**: Fetches current weather information from OpenWeatherMap API
- 📱 **Responsive Design**: Works seamlessly across all device sizes
- 🎨 **Dynamic Styling**: Background changes based on weather conditions
- ⚡ **Fast & Intuitive**: Smooth animations and quick search functionality
- 🌈 **Beautiful UI**: Modern glassmorphism design with animated gradients

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **API**: OpenWeatherMap API
- **Styling**: CSS Animations, Flexbox, Gradient Effects
- **Icons**: Font Awesome
- **Environment**: dotenv for API key management

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

## 🚀 Installation & Setup

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Get your API key** from [OpenWeatherMap](https://openweathermap.org/api):
   - Sign up for a free account
   - Navigate to the API keys section and generate a new key

4. **Create a `.env` file** in the project root and add your API key:
   ```
   OPENWEATHER_API_KEY=your_api_key_here
   ```

5. **Start the server**:
   ```bash
   node server.js
   ```

6. **Open your browser** and navigate to `http://localhost:3000`

## 📖 Usage

1. Enter a city name in the search input field
2. Click the search button or press Enter
3. View real-time weather information including:
   - Current temperature
   - Weather description
   - Humidity percentage
   - Wind speed
   - Location and date

## 🎯 Features Explained

- **Dynamic Backgrounds**: The background color changes based on weather conditions (clear, cloudy, rainy, etc.)
- **Weather Icons**: Appropriate icons are displayed based on the current weather
- **Responsive Layout**: Adapts to different screen sizes for optimal viewing
- **Animated Elements**: Smooth animations enhance user experience
- **Real-time Data**: Always fetches the most recent weather information

## 🏗️ Project Structure

```
weather-dashboard/
│
├── server.js          # Express server and API endpoints
├── package.json       # Project dependencies and scripts
├── .env              # Environment variables (API key)
│
└── public/           # Frontend files
    ├── index.html    # Main HTML structure
    ├── script.js     # Client-side JavaScript
    └── style.css     # CSS styling and animations
```

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/your-username/weather-dashboard](https://github.com/your-username/weather-dashboard)

## 📸 Screenshots

Here's what the Weather Dashboard looks like:

*Note: Add your own screenshots by replacing placeholder images with actual application screenshots.*

| Main Dashboard | Weather Search |
| --- | --- |
| ![Dashboard View](screenshot1.png) | ![Search View](screenshot2.png) |

## 💡 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API
- [Font Awesome](https://fontawesome.com/) for the beautiful icons
- [Express.js](https://expressjs.com/) for the robust web framework

---

<p align="center">
  Made with ❤️ using JavaScript, Node.js, and Express
</p>