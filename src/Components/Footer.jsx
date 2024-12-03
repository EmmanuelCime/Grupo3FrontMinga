import { NavLink } from "react-router-dom"
import FooterBackground from "../assets/footerBackground.png" //background
import DonateButton from "../assets/donateButton.png"
import MingaLogotype from "../assets/mingaLogotype.png"


function Footer() {

    return (
        <>
            <div className="lg:h-[200px]">
                <div className="">
                    <img className="h-20 md:h-32 lg:h-48 w-full" src={FooterBackground} alt="Manga" />
                </div>

                <div className="flex justify-around items-center">
                    <div className="flex justify-around w-80">
                        <NavLink className="text-xs md:text-base" to="/home">Home</NavLink>
                        <NavLink className="text-xs md:text-base" to="/mangas">Mangas</NavLink>
                    </div>

                    <div className="w-80">
                        <NavLink to="/home"><img className="h-6 md:h-12" src={MingaLogotype} alt="Minga Logotype" /></NavLink>
                    </div>

                    <div className="w-50">
                        <div className="flex justify-between">

                            <NavLink className="text-[10px] md:text-base" to="https://www.facebook.com/"><svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="2em"
                                width="2em"
                            >
                                <path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 001-1V4a1 1 0 00-1-1z" />
                            </svg></NavLink>

                            <NavLink className="text-[10px] md:text-base" to="https://twitter.com/?lang=es"><svg
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="2em"
                                width="2em"
                            >
                                <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
                            </svg>
                            </NavLink>

                            <NavLink className="text-[10px] md:text-base" to="https://vimeo.com/es"><svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="2em"
                                width="2em"
                            >
                                <path d="M21.062 10.414c-2.036 4.349-6.949 10.267-10.054 10.267-3.06 0-3.501-6.527-5.173-10.869-.823-2.138-1.354-1.646-2.896-.567L2 8.031c2.248-1.976 4.499-4.272 5.88-4.399 1.559-.148 2.517.916 2.873 3.193.475 2.994 1.137 7.641 2.291 7.641.9 0 3.117-3.686 3.232-5.004.203-1.93-1.421-1.989-2.828-1.387 2.228-7.295 11.494-5.95 7.614 2.339z" />
                            </svg></NavLink>

                            <NavLink className="text-[10px] md:text-base" to="https://www.youtube.com/"><svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="2em"
                                width="2em"
                            >
                                <path d="M21.593 7.203a2.506 2.506 0 00-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 00-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 001.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z" />
                            </svg></NavLink>

                        </div>

                        <div className="flex justify-center">
                            <NavLink to="/donate"><img className="h-5 md:h-7 lg:h-10" src={DonateButton} alt="Donate" /></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer