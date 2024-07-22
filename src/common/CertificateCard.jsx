const CertificateCard = ({ src, link, h3, p }) => {
  return (
    <a href={link}>
      <img className="hover" src={src} alt={`${h3} Certificate`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
};

export default CertificateCard;
