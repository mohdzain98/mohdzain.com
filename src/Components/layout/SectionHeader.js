import "./SectionHeader.css";

const SectionHeader = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`section-header ${className}`.trim()}>
      <h2 className="section-header-title">{title}</h2>
      {subtitle ? <p className="section-header-subtitle">{subtitle}</p> : null}
    </div>
  );
};

export default SectionHeader;
