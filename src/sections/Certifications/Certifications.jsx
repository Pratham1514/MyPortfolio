import styles from "./CertificationsStyles.module.css";
import certificate1 from "../../assets/front-google.png";
import certificate2 from "../../assets/front-devtown.png";
import CertificateCard from "../../common/CertificateCard";
import certificate3 from '../../assets/backend-devtown.png'
import certificate4 from '../../assets/backend-gds.png'

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
        <CertificateCard
          src={certificate3}
          link="https://cert.devtown.in/verify/Z1SGuXJ"
          h3="Back-end Development"
          p="DevTown"
        />
        <CertificateCard
          src={certificate4}
          link="https://cert.devtown.in/verify/Z1bTydW"
          h3="Back-end Development"
          p="GDS Club"
        />
      </div>
    </section>
  );
};

export default Certifications;
