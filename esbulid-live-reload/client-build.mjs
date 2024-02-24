import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/index.js'],
//  jsx : 'automatic',
  bundle: true,
  loader: {'.js' : 'jsx'},
  outfile: 'dist/index.js',
})