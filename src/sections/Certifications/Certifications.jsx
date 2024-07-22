import styles from "./CertificationsStyles.module.css";
import certificate1 from "../../assets/front-google.png";
import certificate2 from "../../assets/front-devtown.png";
import CertificateCard from "../../common/CertificateCard";

const Certifications = () => {
  return (
    <section id="certificates" className={styles.container}>
      <h1 className="sectionTitle">Certificates</h1>
      <div className={styles.certificatesContainer}>
        <CertificateCard
          src={certificate1}
          link="https://cert.devtown.in/verify/Z1kwPXR"
          h3="Front-end Development"
          p="GDS Club"
        />
        <CertificateCard
          src={certificate2}
          link="https://cert.devtown.in/verify/Z2f3Qaq"
          h3="Front-end Development"
          p="DevTown"
        />
      </div>
    </section>
  );
};

export default Certifications;
