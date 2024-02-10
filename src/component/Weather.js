const Weather = ({data}) => {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
        <div className="max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Today's Weather
          </h1>
          <div className="flex items-center justify-center mb-6">
            <div className="text-5xl font-bold text-gray-800">
              {data.temperature}&deg;
            </div>
          </div>
          <div className="text-lg text-gray-700">
            <p className="mb-4">City: {data.city}</p>
            <p className="mb-4">Description: {data.description}</p>
            <p className="mb-4">Wind: {data.wind} Km/h</p>
            <p>Humidity: {data.humidity}%</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
