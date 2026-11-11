const ShadedHR = () => {
  return (
    <hr
      style={{
        margin: "3rem 0 0",
        border: "none",
        height: "2px",
        background:
          "linear-gradient(to right, transparent, #6c757d 30%, #6c757d 70%, transparent)",
      }}
    />
  );
};

export default ShadedHR;
