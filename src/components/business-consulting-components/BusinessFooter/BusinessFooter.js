import React from 'react'
import { Link } from 'react-router-dom'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const BusinessFooter = (props) => {
    return (
        <footer className="site_footer footer_layout_3">
        <div className="footer_main_content bg-dark">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-6">
                <div className="heading_block mb-lg-0 text-white">
                  <h2 className="heading_text mb-1">
                    Tell Us About Your Project.
                  </h2>
                  <p className="heading_description mb-0 text-uppercase">
                    Let's collaborate and make great stuff.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="social_wrap">
                  <h3 className="footer_info_title text-white mb-4 mb-md-0">Follow Us</h3>
                  <ul className="social_icons_block unordered_list">
                                    <li>
                                        <a href="https://www.facebook.com/osyseg" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-x"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/osyseg" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>

            <div className="row justify-content-lg-between pt-lg-4">
              <div className="col-lg-5">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="footer_widget">
                      <h3 className="footer_info_title">Start a Conversation</h3>
                      <ul className="icon_list unordered_list_block">
                        <li>
                                                <a href="mailto:osyseg@gmail.com">
                            <span className="icon_list_text">
                                                        osyseg@gmail.com
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="footer_widget">
                      <h3 className="footer_info_title">Call Us:</h3>
                      <ul className="icon_list unordered_list_block">
                        <li>
                                                <a href="tel:+201553250072">
                            <span className="icon_list_text">
                                                        +201553250072
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Useful Links</h3>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <Link onClick={ClickHandler} to="/service">
                        <span className="icon_list_text">
                          Careers
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/team">
                        <span className="icon_list_text">
                          Our Team
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/portfolio">
                        <span className="icon_list_text">
                          Latest Projects
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/portfolio">
                        <span className="icon_list_text">
                          Awarded portfolio
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/about">
                        <span className="icon_list_text">
                          FAQ
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Address</h3>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <Link onClick={ClickHandler} to="/contact">
                        <span className="icon_list_text">
                                                10th of Ramadan City, Egypt
                        </span>
                      </Link>
                    </li>
                    
                    <li>
                      <Link onClick={ClickHandler} to="/contact">
                        <span className="icon_list_text">
                                                Industrial Zone, 10th of Ramadan City, Egypt
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom bg-primary text-white">
          <div className="container d-md-flex align-items-md-center justify-content-md-between">
            <p className="copyright_text m-0">
              Copyright © 2024 OSYS, All rights reserved.
            </p>
            <p className="copyright_text m-0">
              Developed by <Link onClick={ClickHandler} to="/" target="_blank">XpressBuddy</Link>
            </p>
          </div>
        </div>
      </footer>
    )
}

export default BusinessFooter;