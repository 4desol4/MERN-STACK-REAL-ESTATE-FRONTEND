import React from "react";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { motion } from "framer-motion";
import "./Contact.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* Left side */}
        <motion.div
          className="flexColStart c-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.span variants={fadeInUp} className="orangeText">
            Contact Us
          </motion.span>
          <motion.span variants={fadeInUp} className="primaryText">
            Easy to Reach Us
          </motion.span>
          <motion.span variants={fadeInUp} className="secondaryText">
            We’re always ready to assist with top-notch service. A good place to
            live improves your life.
          </motion.span>

          <div className="flexColStart contactModes">
            {/* Chat */}
            <motion.div variants={fadeInUp} className="row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">103-213-7431</span>
                  </div>
                </div>
                <a href="https://services.zangi.com/dl/conversation/1032137431">
                  <div className="flexCenter button">Chat now</div>
                </a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeInUp} className="row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email</span>
                    <span className="secondaryText">Email us now</span>
                  </div>
                </div>
                <a href="mailto:presidiorealestate9@gmail.com">
                  <div className="flexCenter button">Email now</div>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          className="flexEnd c-right"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="image-container">
            <img src="./contact.jpg" alt="contact" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
