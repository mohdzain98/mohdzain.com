const Conclusion = () => {
  return (
    <div>
      <h3>Conclusion</h3>
      <hr style={{ width: "50%" }} />
      <p className="justified">
        In our study, we introduce a cryptosystem specifically designed for
        encrypting color images using the ⊗ operator. The underlying properties
        of this operator facilitate its dual use in both encryption and
        decryption processes. This functionality stems from its ability to form
        an Abelian group, characterized by its distributive and commutative
        properties. Our cryptosystem incorporates these characteristics in a
        unique sequence of operations that includes DNA encoding, substitution,
        and subsequent decoding, intertwined with a specialized mixing procedure
        preceded by inter channel mixing and mixing rows with initial array
        mapped from a chaotic map that exploits these mathematical properties of
        the ⊗ operator.
      </p>
      <br />
      <p className="justified">
        Further, our system is structured to simplify the decryption process by
        reversing specific changes applied during encryption, thus avoiding the
        complexity and computational intensity typically associated with
        multiple rounds of confusion and diffusion found in many current
        cryptosystems. This streamlined approach relies on basic computational
        tasks, significantly reducing the operational burden.
      </p>
    </div>
  );
};

export default Conclusion;
