import Link from "next/link";
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
  MDBDropdownItem,
} from "mdbreact";
import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from "../styles/NavBar.module.css";
import Image from "next/legacy/image";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleCollapse = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };
  render() {
    return (
      <>
        <MDBNavbar
          className={styles.nav}
          color="indigo"
          dark
          expand="md"
        >
          <motion.div whileHover={{ scale: 2 }}>
            <MDBNavbarBrand>
              <Link href="/">
                <Image
                  src="/Images/WebPFiles/obcglogo.webp"
                  alt="logo"
                  width={60}
                  className={styles.logoimg}
                  height={60}
                />
              </Link>
            </MDBNavbarBrand>
          </motion.div>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left className={styles.dropdownNav}></MDBNavbarNav>
            <MDBNavbarNav right>
              <motion.div whileHover={{ scale: 1.15 }}>
                <MDBNavItem>
                  <Link
                    href="/"
                    as="/"
                    className="nav-link"
                    onClick={this.toggleCollapse}
                  >
                    Home
                  </Link>
                </MDBNavItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.15 }}>
                <MDBNavItem>
                  <Link
                    href="/about"
                    as="/about"
                    className="nav-link"
                    onClick={this.toggleCollapse}
                  >
                    About
                  </Link>
                </MDBNavItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.15 }}>
                <MDBNavItem>
                  <Link
                    href="/articles"
                    as="/articles"
                    className="nav-link"
                    onClick={this.toggleCollapse}
                  >
                    Articles of Incorporation
                  </Link>
                </MDBNavItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.15 }}>
                <MDBNavItem>
                  <Link
                    href="/executive"
                    as="/executive"
                    className="nav-link"
                    onClick={this.toggleCollapse}
                  >
                    Executive Board
                  </Link>
                </MDBNavItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.15 }}>
                <MDBNavItem>
                  <Link
                    href="/register"
                    as="/register"
                    className="nav-link"
                    onClick={this.toggleCollapse}
                  >
                    Check Usage
                  </Link>
                </MDBNavItem>
              </motion.div>

              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav>
                    <motion.div whileHover={{ scale: 1.15 }}>
                      <span className="mr-2">Documents</span>
                      <span className={styles.ddf}>◿</span>
                    </motion.div>
                  </MDBDropdownToggle>

                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <Link
                        href="/pdfs/efficiency"
                        onClick={this.toggleCollapse}
                      >
                        Water Use Efficiency
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link href="/pdfs/sysplan" onClick={this.toggleCollapse}>
                        Water System Plan
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link href="/pdfs/bylaws" onClick={this.toggleCollapse}>
                        Current Bylaws
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link
                        href="/pdfs/franchisepermit"
                        onClick={this.toggleCollapse}
                      >
                        Mason County Franchise Permit
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link href="/FAQ.pdf" onClick={this.toggleCollapse}>
                        FAQs
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link href="/misc" onClick={this.toggleCollapse}>
                        Misc. Files
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link href="/pdfs/obcg_sept_special" onClick={this.toggleCollapse}>
                        Special Meeting 9.17
                      </Link>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>

              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav>
                    <motion.div whileHover={{ scale: 1.15 }}>
                      <span className="mr-2">Newsletters</span>
                      <span className={styles.ddf}>◿</span>
                    </motion.div>
                  </MDBDropdownToggle>

                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <Link
                        href="/pdfs/newsletters/feb24"
                        onClick={this.toggleCollapse}
                      >
                        2.3.24
                      </Link>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>

              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav>
                    <motion.div whileHover={{ scale: 1.15 }}>
                      <span className="mr-2">Minutes</span>
                      <span className={styles.ddf}>◿</span>
                    </motion.div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                  <MDBDropdownItem>
                      <Link
                        href="/pdfs/111323"
                        onClick={this.toggleCollapse}
                      >
                        2023 Brd. Appt.
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link
                        href="/pdfs/sep172023min"
                        onClick={this.toggleCollapse}
                      >
                        2023 Special
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link
                        href="/pdfs/misc/minutes/2023Minutes"
                        onClick={this.toggleCollapse}
                      >
                        2023
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link
                        href="/pdfs/misc/minutes/2022Minutes"
                        onClick={this.toggleCollapse}
                      >
                        2022
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link
                        href="/pdfs/misc/minutes/2021Minutes"
                        onClick={this.toggleCollapse}
                      >
                        2021
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link
                        href="/pdfs/misc/minutes/2020Minutes"
                        onClick={this.toggleCollapse}
                      >
                        2020
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link
                        href="/pdfs/misc/minutes/2019Minutes"
                        onClick={this.toggleCollapse}
                      >
                        2019
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link
                        href="/pdfs/misc/minutes/2018Minutes"
                        onClick={this.toggleCollapse}
                      >
                        2018
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link
                        href="/pdfs/misc/minutes/2017Minutes"
                        onClick={this.toggleCollapse}
                      >
                        2017
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link
                        href="/pdfs/misc/minutes/2016Minutes"
                        onClick={this.toggleCollapse}
                      >
                        2016
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link
                        href="/pdfs/misc/minutes/2015Minutes"
                        onClick={this.toggleCollapse}
                      >
                        2015
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link
                        href="/pdfs/misc/minutes/archive/archive"
                        onClick={this.toggleCollapse}
                      >
                        Archive
                      </Link>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav>
                    <motion.div whileHover={{ scale: 1.15 }}>
                      <span className="mr-2">Community</span>
                      <span className={styles.ddf}>◿</span>
                    </motion.div>
                  </MDBDropdownToggle>

                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <Link href="/videos" onClick={this.toggleCollapse}>
                        Whale Videos
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link href="/parades" onClick={this.toggleCollapse}>
                        Parade
                      </Link>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <motion.div whileHover={{ scale: 1.15 }}>
                <MDBNavItem>
                  <Link
                    href="/contact"
                    className="nav-link"
                    onClick={this.toggleCollapse}
                  >
                    Contact
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
