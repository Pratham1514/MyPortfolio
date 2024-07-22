import styles from "./FooterStyles.module.css";

const Footer = () => {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Prathamesh Gite. <br /> All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
