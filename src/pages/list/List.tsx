import Navbar from '../component/navbar/Navbar';
import { DateRange } from "react-date-range";
import "./List.css";
import SearchItem from '../component/searchItem/SearchItem';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';
import Footer from '../component/footer/Footer';

const List: React.FC = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dateRange, setDateRange] = useState(location.state.dateRange);
  const [options] = useState(location.state.options);
  const [openDatePicker, setOpenDatePicker] = useState(false);

  // Define a ref for the calendar element
  const calendarRef = useRef<HTMLDivElement>(null);

  // Define the handleSelect function to update the date range
  const handleSelect = (ranges: { selection: Range }) => {
    setDateRange([ranges.selection]);  // Update the date range with the new selection
  };
 
    // Close the calendar or options if clicked outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
          setOpenDatePicker(false); // Close calendar when clicking outside
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

  console.log(location);
  return (
    <div>
      <Navbar />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder={destination}
                type="text"
              />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDatePicker(!openDatePicker)}>
                {
                  `${format(dateRange[0].startDate, "MM/dd/yyyy")} to ${format(dateRange[0].endDate, "MM/dd/yyyy")}`
                }
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
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult.toString()}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children.toString()}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room.toString()}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default List;
