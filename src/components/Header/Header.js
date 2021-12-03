import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      Cours React
      <ul className={styles.menu}>
        <li>
          <Link to="/storer" className={styles.menuItem}>Storer</Link>
        </li>
        <li>
          <Link to="/uploaderI" className={styles.menuItem}>UploaderI</Link>
        </li>
        <li>
          <Link to="/imageworker" className={styles.menuItem}>Imageworker</Link>
        </li>
        <li>
          <Link to="/v1" className={styles.menuItem}>V1</Link>
        </li>
        <li>
          <Link to="/v2" className={styles.menuItem}>V2</Link>
        </li>
        <li>
          <Link to="/v3" className={styles.menuItem}>V3 (whole)</Link>
        </li>
        <li>
          <Link to="/v4" className={styles.menuItem}>V4 (ls)</Link>
        </li>
        <li>
          <Link to="/Setcadre" className={styles.menuItem}>Setcadre</Link>
        </li>
        <li>
          <Link to="/v5" className={styles.menuItem}>v5 (fusion)</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
