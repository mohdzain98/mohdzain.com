import fs from "node:fs";
import path from "node:path";
import { ICONS } from "@/components/icons/Icon";

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}

describe("icon slugs", () => {
  it("every data-driven icon slug exists in the registry", () => {
    const files = walk(path.resolve(__dirname, "..")).filter(
      (f) => /\.(ts|tsx)$/.test(f) && !f.includes(`${path.sep}ui${path.sep}`),
    );
    const missing: string[] = [];
    for (const f of files) {
      const text = fs.readFileSync(f, "utf8");
      for (const m of text.matchAll(/\bicon: "([a-z0-9-]+)"/g)) {
        if (!(m[1] in ICONS)) missing.push(`${path.basename(f)}: ${m[1]}`);
      }
      for (const m of text.matchAll(/<Icon\s+name="([a-z0-9-]+)"/g)) {
        if (!(m[1] in ICONS)) missing.push(`${path.basename(f)}: ${m[1]}`);
      }
    }
    expect(missing).toEqual([]);
  });
});
