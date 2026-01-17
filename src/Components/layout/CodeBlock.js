import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ id, language, code }) => {
  const [copiedBlock, setCopiedBlock] = useState(null);
  const handleCopy = (text, blockId) => {
    if (!navigator?.clipboard?.writeText) {
      return;
    }
    navigator.clipboard.writeText(text).then(() => {
      setCopiedBlock(blockId);
      window.setTimeout(() => {
        setCopiedBlock((current) => (current === blockId ? null : current));
      }, 1500);
    });
  };
  return (
    <pre
      className="bg-light ps-4 pe-3 pb-3 rounded border"
      style={{ maxHeight: "600px" }}
    >
      <div className="d-flex flex-row justify-content-between align-items-center sticky-top bg-light py-2">
        <div className="text-muted">{language}</div>
        <button
          type="button"
          className="btn btn-default btn-sm text-muted"
          onClick={() => handleCopy(code, id)}
        >
          {copiedBlock === id ? (
            <span>
              <i className="fa-solid fa-check"></i> Copied!
            </span>
          ) : (
            <span>
              <i className="fa-regular fa-copy"></i> Copy
            </span>
          )}
        </button>
      </div>
      {/* <code>{code}</code> */}
      <SyntaxHighlighter
        language={language}
        style={oneLight}
        customStyle={{
          margin: 0,
          background: "transparent",
          fontSize: "16px",
          lineHeight: "1.6",
          padding: "0",
        }}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </pre>
  );
};

export default CodeBlock;
