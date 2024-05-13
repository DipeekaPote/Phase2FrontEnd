import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import './clientsidebar.css'
import { PiNotepadThin } from "react-icons/pi";
import { SlCreditCard } from "react-icons/sl";
const ClientSidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [pay, setPay] = useState(false);


  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleComplete = () => {
    setIsComplete(true);
  };

  const handlePay = () => {
    setPay(true);
  }
  return (
    <div className="App">


      <section className="clientsidebar">
        {/* Sidebar content goes here */}
        <div style={{ width: '250px' }}>
          <nav >
            <ul>
              <li><Link to="/dashboard">Dashboard</Link></li>

              {/* Add more sidebar items as needed */}
            </ul>
          </nav>
        </div>

      </section>
      <main className='clientmain'>
        {/* Main content goes here */}
        <Outlet />
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>


          <div className='middle-container'>
            <div className='middle-container-tittle'>
              <h4>Waiting for action</h4>
            </div>
            <div className='client-dashbord-organizers'>
              <div className='dashbord-organizers'>
                <div className='organizer-dashboard'>
                  <p>organizers</p>
                </div>
                <div className='see-all'>
                  <p>See all</p>
                </div>
              </div>

              <div className='all-organizers'>
                <div className='organizer-client'>
                  <div className='organizer-client-complete'>
                    <label>complete organizer</label>
                  </div>
                  <div className='organizer-icon' onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}><PiNotepadThin />
                    <p>2023 Individual Tax Organizer</p>
                    {isHovered && !isComplete && (
                      <div className='complete' onClick={handleComplete}>
                        <p>Complete</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className='organizer-client'>
                  <div className='organizer-client-complete'>
                    <label>complete organizer</label>
                  </div>
                  <div className='organizer-icon' onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}><PiNotepadThin />
                    <p>2023 Individual Tax Organizer</p>
                    {isHovered && !isComplete && (
                      <div className='complete' onClick={handleComplete}>
                        <p>Complete</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className='organizer-client'>
                  <div className='organizer-client-complete'>
                    <label>complete organizer</label>
                  </div>
                  <div className='organizer-icon' onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}><PiNotepadThin />
                    <p>2023 Individual Tax Organizer</p>
                    {isHovered && !isComplete && (
                      <div className='complete' onClick={handleComplete}>
                        <p>Complete</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className='dashboard-billing'>
                <div className='dashboard-billing'>
                  <p>Billing</p>
                </div>

                <div className='dashboard-pay-invoice'>
                  <div className='client_Pay_invoice'>
                    <label>Pay invoice $1.00</label>

                  </div>

                  <div className='dashbord-invoice-icon' onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}><SlCreditCard />
                    <p>#2413</p>
                    {isHovered && !pay && (
                      <div className='pay' onClick={handlePay}>
                        <p style={{ color: '#1976d3' }}>pay</p>
                      </div>
                    )}
                  </div>


                </div>

              </div>
            </div>
          </div>
          {/* <div className='dashboard-billing'>
            <div className='dashboard-billing'>
              <p>Billing</p>
            </div>

            <div className='dashboard-pay-invoice'>
              <div className='client_Pay_invoice'>
                <label>Pay invoice $1.00</label>

              </div>

              <div className='dashbord-invoice-icon' onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}><SlCreditCard />
                <p>#2413</p>
                {isHovered && !pay && (
                  <div className='pay' onClick={handlePay}>
                    <p style={{ color: '#1976d3' }}>pay</p>
                  </div>
                )}
              </div>


            </div>

          </div> */}
        </div>
      </main>

    </div>
  );
}


export default ClientSidebar
