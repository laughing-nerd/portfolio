"use client";

import styles from './page.module.css'
import { regular_text } from './utils/fonts'
import { InlineIcon } from '@iconify/react'
import Image from 'next/image';
import Modal from './components/modal';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [toggleModal, setToggleModal] = useState(false);

  const downloadResume = () => {
    const url = "https://drive.google.com/file/d/1vzYqi_ekLphWJTNVhc7dg-8tdbPr1Hvu/view?usp=sharing";
    let aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("target", "_blank");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  const openModal = () => {
    setToggleModal(true);
  }
  const closeModal = () => {
    setToggleModal(false);
  }

  return (

    <motion.div className={styles.main + " " + regular_text.className}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ delay: 0.05 }}
    >
      <AnimatePresence mode="wait">
        {toggleModal ? <Modal close={closeModal} /> : null}
      </AnimatePresence>

      <div className={styles.left_col}>
        <div className={styles.my_name}>
          Rituraj Paul
        </div>
        <div className={styles.subheading}>
          An extremely passionate and highly motivated
        </div>
        <div className={styles.dynamic_subheading}>
          <span>Fullstack MERN developer</span>
          <span>REST API developer</span>
          <span>Linux Enthusiast</span>
          <span>Discord bot developer</span>
          <span>Fullstack MERN developer</span>
        </div>

        <div className={styles.interactive_buttons}>
          <div className={styles.resume} onClick={() => downloadResume()}>
            <div className={styles.resume_icon}>
              <InlineIcon icon="ph:scroll-bold" />
            </div>
            <div>
              Resume
            </div>
          </div>
          <div className={styles.hire_me} onClick={openModal}>
            <div className={styles.hire_me_icon}>
              <InlineIcon icon="ph:handshake-fill" />
            </div>
            <div>
              Hire Me
            </div>
          </div>
        </div>

      </div>
      <div className={styles.right_col}>
        <Image
          src="/home/home-bg.gif"
          alt="Bg_Image"
          fill
        />
      </div>
    </motion.div>
  )
}
