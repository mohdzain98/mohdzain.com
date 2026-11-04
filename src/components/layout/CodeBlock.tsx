import { useState } from "react";
import { useTheme } from "next-themes";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import less from "react-syntax-highlighter/dist/esm/languages/prism/less";
import nginx from "react-syntax-highlighter/dist/esm/languages/prism/nginx";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import yaml from "react-syntax-highlighter/dist/esm/languages/prism/yaml";
import oneDark from "react-syntax-highlighter/dist/esm/styles/prism/one-dark";
import oneLight from "react-syntax-highlighter/dist/esm/styles/prism/one-light";
import { Check, Code, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

// Only the languages used on the site are bundled.
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("less", less);
SyntaxHighlighter.registerLanguage("nginx", nginx);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("yaml", yaml);

interface CodeBlockProps {
  id: string;
  language: string;
  code: string;
  fontSize?: string;
}

export default function CodeBlock({
  id,
  language,
  code,
  fontSize = "15px",
}: CodeBlockProps) {
  const { resolvedTheme } = useTheme();
  const [copiedBlock, setCopiedBlock] = useState<string | null>(null);

  const handleCopy = (text: string, blockId: string) => {
    if (!navigator?.clipboard?.writeText) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedBlock(blockId);
      window.setTimeout(() => {
        setCopiedBlock((current) => (current === blockId ? null : current));
      }, 1500);
    });
  };

  return (
    <div className="bg-muted max-h-[600px] overflow-auto rounded-lg border pr-4 pb-4 pl-6">
      <div className="bg-muted sticky top-0 z-10 flex items-center justify-between py-2">
        <div className="text-foreground flex items-center gap-2 text-sm">
          <Code className="size-3.5" />
          {language}
        </div>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="text-muted-foreground"
          onClick={() => handleCopy(code, id)}
        >
          {copiedBlock === id ? (
            <>
              <Check className="size-4" /> Copied!
            </>
          ) : (
            <>
              <Copy className="size-4" /> Copy
            </>
          )}
        </Button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={resolvedTheme === "dark" ? oneDark : oneLight}
        customStyle={{
          margin: 0,
          background: "transparent",
          fontSize,
          lineHeight: "1.4",
          padding: "10px",
        }}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
