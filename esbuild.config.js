const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['app.ts'],
  bundle: true,
  platform: 'node',
  outdir: '.aws-sam/build/SearchProductsFunction',
  external: ['zod', 'pg'],
  format: 'cjs',
  minify: true,
  target: 'es2020',
  sourcemap: true,
}).catch(() => process.exit(1));
