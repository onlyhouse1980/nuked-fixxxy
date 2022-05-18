import Link from 'next/link';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdbreact';
import { motion } from 'framer-motion'
import React from 'react'
import styles from '../styles/NavBar.module.css'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <MDBNavbar color='indigo' z-index='10!important' dark expand='md' height='50px!important'>
        <motion.div whileHover= {{ scale: 2 }} >
          <MDBNavbarBrand>
            <a 
              href="https://obcg.org"><img 
              src="../../Images/WebPFiles/obcglogo.webp" 
              alt="logo" 
              width={60}
              className={styles.logoimg} 
              height={60} />
            </a>
          </MDBNavbarBrand>
          </motion.div>
          <MDBNavbarToggler 
            onClick={this.toggleCollapse} />
          <MDBCollapse 
            id='navbarCollapse3' 
            isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left className={styles.dropdownNav}>
              
            </MDBNavbarNav>
            <MDBNavbarNav right>
            <motion.div whileHover= {{ scale: 1.15 }} >
            <MDBNavItem>
                <Link href='/'>
                  <a className='nav-link' 
                    onClick={this.toggleCollapse}
                    >Home</a>
                </Link>
              </MDBNavItem>
            </motion.div>
            <motion.div whileHover={{ scale: 1.15 }} >
              <MDBNavItem>
                <Link href='/about'>
                  <a className='nav-link' onClick={this.toggleCollapse} >About</a>
                </Link>
              </MDBNavItem>
            </motion.div>
            <motion.div whileHover={{ scale: 1.15 }} >
              <MDBNavItem>
                <Link href='/articles'>
                <a className='nav-link' onClick={this.toggleCollapse} >Articles of Incorporation</a>
                </Link>
              </MDBNavItem>
            </motion.div>
            <motion.div whileHover={{ scale: 1.15 }} >
              <MDBNavItem>
                <Link href='/executive'>
                  <a className='nav-link' onClick={this.toggleCollapse} >Executive Board</a>
                </Link>
              </MDBNavItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.15 }} >
              <MDBNavItem>
                <Link href='/register'>
                  <a className='nav-link' onClick={this.toggleCollapse} >Check Usage</a>
                </Link>
              </MDBNavItem>
              </motion.div>
              
              <MDBNavItem>
                <MDBDropdown>
                
                  <MDBDropdownToggle nav>
                  <motion.div whileHover={{ scale: 1.15 }} >
                    <span className='mr-2'>Documents</span><span className={styles.ddf}>◿</span>
                    </motion.div>
                  </MDBDropdownToggle>
                 
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                    <Link target='blank' href='/Efficiency.pdf'>
                        <a onClick={this.toggleCollapse}>Water Use Efficiency</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                    <Link target='_blank' href='/Sysplan.pdf'>
                        <a onClick={this.toggleCollapse}>Water System Plan</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                    <Link target='_blank' href='/consumer.pdf'>
                        <a onClick={this.toggleCollapse}>Consumer Confidence 2020</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                    <Link target='_blank' href='/CCR_April_2022_reporting_year_2021.pdf'>
                        <a onClick={this.toggleCollapse}>Consumer Confidence 2021</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                    <Link target='_blank' href='/Bylaws.pdf'>
                        <a onClick={this.toggleCollapse}>Current Bylaws</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                    <Link target='_blank' href='/pastbylaws'>
                        <a onClick={this.toggleCollapse}>Past Bylaws</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                    <Link target='_blank' href='/masCountyFranchisePermit.pdf'>
                        <a onClick={this.toggleCollapse}>Mason County Franchise Permit</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>                   
                      <Link target='_blank' href='/FAQ.pdf'>
                        <a onClick={this.toggleCollapse}>FAQs</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>                   
                      <Link target='_blank' href='/misc'>
                        <a onClick={this.toggleCollapse}>Misc. Files</a>
                      </Link>
                    </MDBDropdownItem> 
                                        
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>

              <MDBNavItem>
                <MDBDropdown>
                
                  <MDBDropdownToggle nav>
                  <motion.div whileHover={{ scale: 1.15 }} >
                    <span className='mr-2'>Consumer Confidence</span><span className={styles.ddf}>◿</span>
                    </motion.div>
                  </MDBDropdownToggle>
                 
                  <MDBDropdownMenu>
                    
                    <MDBDropdownItem>
                    <Link target='_blank' href='/consumer.pdf'>
                        <a onClick={this.toggleCollapse}>CCR 2020</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                    <Link target='_blank' href='/CCR_April_2022_reporting_year_2021.pdf'>
                        <a onClick={this.toggleCollapse}>CCR 2021</a>
                      </Link>
                    </MDBDropdownItem>
                    
                                        
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>

              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav>
                  <motion.div whileHover={{ scale: 1.15 }} >
                    <span className='mr-2'>Minutes</span><span className={styles.ddf}>◿</span>
                  </motion.div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <Link target='blank' href='/minutes061221.pdf'>
                        <a onClick={this.toggleCollapse}>2021</a>
                      </Link>
                    </MDBDropdownItem> 
                    <MDBDropdownItem>
                    <Link target='blank' href='/2020Minutes.pdf'>
                        <a onClick={this.toggleCollapse}>2020</a>
                      </Link>
                    </MDBDropdownItem> 
                    <MDBDropdownItem>
                    <Link target='_blank' href='/2019Minutes.pdf'>
                        <a onClick={this.toggleCollapse}>2019</a>
                      </Link>
                    </MDBDropdownItem>                   
                    <MDBDropdownItem>
                    <Link target='_blank' href='/2018Minutes.pdf'>
                        <a onClick={this.toggleCollapse}>2018</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                    <Link target='_blank' href='/2017Minutes.pdf'>
                        <a onClick={this.toggleCollapse}>2017</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                    <Link target='_blank' href='/2016Minutes.pdf'>
                        <a onClick={this.toggleCollapse}>2016</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                    <Link target='_blank' href='/2015Minutes.pdf'>
                        <a onClick={this.toggleCollapse}>2015</a>
                      </Link>
                    </MDBDropdownItem>
                     <MDBDropdownItem>
                    <Link target='_blank' href='/archive'>
                        <a onClick={this.toggleCollapse}>Archive</a>
                      </Link>
                    </MDBDropdownItem>                  
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <motion.div whileHover={{ scale: 1.15 }} >
              <MDBNavItem>
                <Link href='/contact'>
                  <a className='nav-link' onClick={this.toggleCollapse} >Contact</a>
                </Link>
              </MDBNavItem>
              </motion.div>
              
              
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </>
    );
  }
}

export default Navbar;
