import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import './Enquiry.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCashRegister, faGear, faPeopleGroup, faTabletScreenButton } from '@fortawesome/free-solid-svg-icons'
import MailList from '../component/mailList/MailList'

const Enquiry: React.FC = () => {
  return (
    <div>      
        <Navbar />
            <div className="container"> 
                <div className="wrapper">
                <div className="content">
                    <h1>Increase your hotel revenue by joining EasyStay</h1>
                    <ul>
                    <li>
                    <FontAwesomeIcon icon={faTabletScreenButton} className='ContentIcon' />&nbsp;&nbsp;
                        Increase your digital presence with listing <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;on major OTA platforms
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faGear} className='ContentIcon' />&nbsp;&nbsp;
                        Clear and timely reconciliation
                    </li>
                    <li>
                        
                    <FontAwesomeIcon icon={faPeopleGroup} className='ContentIcon' />&nbsp;
                        Clear and timely reconciliation
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faCashRegister} className='ContentIcon' />&nbsp;&nbsp;
                        No hidden charges
                    </li>
                    </ul>
                </div>

                <div className="form-container">
                    <h2>Join EasyStay Now!</h2>
                    <form>
                    <input type="text" placeholder="Hotel Name" />
                    <input type="email" placeholder="Hotel Email" />
                    <input type="text" placeholder="Hotel Location" />
                    <input type="text" placeholder="Contact Person Name" />
                    <input type="text" placeholder="Mobile Number" />
                    <button type="button" className="otp-button">Get OTP</button>
                    <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
                </div>
            </div>
        <MailList />
        <Footer />
    </div>
  )
}

export default Enquiry