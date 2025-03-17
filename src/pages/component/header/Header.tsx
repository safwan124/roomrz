import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocation, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // Main style file for DateRangePicker
import 'react-date-range/dist/theme/default.css'; // Theme CSS for DateRangePicker
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [destination, setDestination] = useState("");
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7), // End date is 7 days after start date
      key: 'selection',
    }
  ]);

  const [openDatePicker, setOpenDatePicker] = useState(false); // Toggle for showing the DateRangePicker
  const [openOptions, setOpenOptions] = useState(false); // Toggle for showing the adult counter
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const calendarRef = useRef<HTMLDivElement>(null); // Reference for the calendar
  const optionsRef = useRef<HTMLDivElement>(null); // Reference for the options counter

  const handleSelect = (ranges: any) => {
    setDateRange([ranges.selection]);
  };

  const navigate = useNavigate();

  const handleOption = (name: 'adult' | 'children' | 'room', operation: 'i' | 'd') => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, dateRange, options } });
  };

  // Close the calendar or options if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setOpenDatePicker(false); // Close calendar when clicking outside
      }
      if (optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
        setOpenOptions(false); // Close options when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="header">
      <div className="container">
        <h1 className="headertitle">Hotel Room Booking With Easy Stay!</h1>
        <p className="headerdescription">Discover a Range of Elegant Living Spaces in Hidden Destinations.</p>
        <p className="hashtag">#EasyStay</p>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faLocation} className='headerIcon' />
            <input type="text" placeholder='Where are you going?' className='headerSearchInput' 
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
            <span
              className='headerSearchText'
              onClick={() => setOpenDatePicker(!openDatePicker)}
            >
              {`${dateRange[0].startDate.toDateString()} to ${dateRange[0].endDate.toDateString()}`}
            </span>

            {openDatePicker && (
              <div className="dateRangePicker" ref={calendarRef}>
                <DateRange
                  ranges={dateRange}
                  onChange={handleSelect}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={2}
                  direction="horizontal"
                  minDate={new Date()} // Disable past dates
                />
              </div>
            )}
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="headerSearchText"
            >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
            {openOptions && (
              <div className="options" ref={optionsRef}>
                <div className="optionItem">
                  <span className="optionText">Adult<br />(Above Age 12)</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.adult <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.adult}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children<br />(Below Age 12)</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.children <= 0}
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.room <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.room}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="headerSearchItem">
            <div className="headerBtn">
              <button className="headerSearchBtn" onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} className='headerSearchIcon' />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
