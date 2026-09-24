/** Node custom loader: map @/ → html/src/ and append .js when needed */
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const srcRoot = path.resolve(
  path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')),
  '../src'
);

export async function resolve(specifier, context, nextResolve) {
  let next = specifier;
  if (specifier.startsWith('@/')) {
    next = path.join(srcRoot, specifier.slice(2));
    if (!next.endsWith('.js') && !next.endsWith('.vue') && !next.endsWith('.json')) {
      const asJs = `${next}.js`;
      if (fs.existsSync(asJs)) next = asJs;
    }
    return nextResolve(pathToFileURL(next).href, context);
  }
  return nextResolve(specifier, context);
}
