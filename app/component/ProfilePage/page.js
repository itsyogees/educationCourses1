"use client";

import React, { useState } from 'react';
import styles from "./ProfilePage.module.scss";
import { FaBars, FaTimes, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Import icons for settings and logout

const ProfilePage = () => {
  const [isSidenavOpen, setSidenavOpen] = useState(false); // State to manage sidenav toggle

  return (
    <div className={styles.ProfilePage}>
      {/* Sidenav */}
      <div className={`${styles.sidenav} ${isSidenavOpen ? styles.open : ''}`}>
        <div className={styles.logo}>
          <h2>MyLogo</h2>
        </div>
        <nav className={styles.navLinks}>
          <a href="#dashboard">Dashboard</a>
          <a href="#courses">My Courses</a>
          <a href="#assignments">Assignments</a>
          <a href="#reviews">Reviews</a>
          <div className={styles.spacer}></div> {/* Gap before settings/logout */}
          <a href="#settings"><FaCog /> Settings</a>
          <a href="#logout"><FaSignOutAlt /> Logout</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <button className={styles.hamburger} onClick={() => setSidenavOpen(!isSidenavOpen)}>
            {isSidenavOpen ? <FaTimes /> : <FaBars />}
          </button>
          <h1>Welcome to Your Profile</h1>
        </div>
        <div className={styles.content}>
          <h2>Student</h2>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
