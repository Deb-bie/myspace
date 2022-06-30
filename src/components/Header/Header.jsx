import {useState} from 'react';
import "./Header.css"
import {FaBed, FaPlane, FaCarAlt, FaTaxi, FaCalendarAlt, FaUserAlt } from 'react-icons/fa';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns"
import { useNavigate } from "react-router-dom";

 
const Header = ({type}) => {
    const navigate = useNavigate();

    const [destination, setDestination] = useState("");

    const [openDate, setOpenDate] = useState(false);
    const handleOpenDate = () => {
        return setOpenDate(!openDate)
    }

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const handleOpenOptions = () => {
        return setOpenOptions(!openOptions)
    }
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })

    const handleOption = (name, operation) =>{
        setOptions(prev =>{
            return {
                ...prev, 
                [name]: operation ==="increase" ? options[name] + 1: options[name] - 1,
            }
        })
    }

    const handleSearch = () =>{
        navigate(
            "/hotels", {
                state: {
                    destination, date, options
                }
            }
        );
    }




    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FaBed />
                        <span>Stays</span>
                    </div>

                    <div className="headerListItem">
                        <FaPlane />
                        <span>Flights</span>
                    </div>

                    <div className="headerListItem">
                        <FaCarAlt/>
                        <span>Car rentals</span>
                    </div>

                    <div className="headerListItem">
                        <FaBed />
                        <span>Attractions</span>
                    </div>

                    <div className="headerListItem">
                        <FaTaxi />
                        <span>Airpot Taxis</span>
                    </div>
                </div>

                { type !== "list" &&
                    <>
                        {/* Title and Description */}
                        <h1 className="headerTitle">
                            A lifetime of discounts? It's Genius.
                        </h1>
                        <p className="headerDesc">
                            Get rewarded for your travels - unlock instant savings of
                            10% or more with Zubi.com account.
                        </p>
                        <button className="headerBtn">Sign In</button>


                        {/* Header Search */}
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FaBed className="headerIcon" />
                                <input type="text" placeholder='Where are you going to?' className="headerSearchInput" onChange={e=>setDestination(e.target.value)} />
                            </div>

                            <div  className="headerSearchItem">
                                <FaCalendarAlt className="headerIcon" />
                                <span onClick={handleOpenDate} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                                {
                                    openDate && <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className="date"
                                    />
                                }
                            </div>

                            <div className="headerSearchItem">
                                <FaUserAlt className="headerIcon" />
                                <span onClick={handleOpenOptions} className="headerSearchText">
                                    {
                                        `${options.adult} adult . ${options.children} children . ${options.room} room `
                                    }
                                </span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Adult</span>
                                        <div className="optionCounter">
                                            <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption("adult", "decrease")}>-</button>
                                            <span className="optionCounterNumber">{options.adult}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("adult", "increase")}>+</button>
                                        </div>
                                    </div>

                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCounter">
                                            <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOption("children", "decrease")}>-</button>
                                            <span className="optionCounterNumber">{options.children}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("children", "increase")}>+</button>
                                        </div>
                                    </div>

                                    <div className="optionItem">
                                        <span className="optionText">Room</span>
                                        <div className="optionCounter">
                                            <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handleOption("room", "decrease")}>-</button>
                                            <span className="optionCounterNumber">{options.room}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("room", "increase")}>+</button>
                                        </div>
                                    </div>
                                </div>
                                }
                            </div>

                            <div className="headerSearchItem">
                                <button className="headerMainSearch" onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Header;
