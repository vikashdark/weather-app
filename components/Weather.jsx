import react from "react";
import Image from "next/image";
const Weather = ({data}) => {
    console.log(data);
    console.log(data.weather[0].icon);
    return (
        <div className="relative z-[10] max-w-[500px] w-full h-90vh m-auto p-4">  
            <div className="relative flex pt-12 justify-between w-full items-center text-white">
                <div className="">
                    <Image
                        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        alt="/"
                        width='100'
                        height='100'
                    />
                    <p className="text-2xl">{data.weather[0].main}</p>
                </div>
                <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
            </div>

            <div className="bg-black z-[10] relative p-8 rounded-md">
                <p className="text-2xl text-center pb-6">Weather in {data.name}</p>
                <div className="flex justify-between text-center">
                    <div>
                        <p>{data.main.feels_like.toFixed(0)}&#176;</p>
                        <p>Feels Like</p>
                    </div>
                    <div>
                        <p>{data.main.humidity}%</p>
                        <p>Feels Like</p>
                    </div>
                    <div>
                        <p>{data.wind.speed.toFixed(0)} MPH</p>
                        <p>Winds</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Weather