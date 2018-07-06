import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';
import sassImporter from 'node-sass-package-importer';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'source/script.js',
    dest: 'build/script.js',
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
        resolve(),
        commonjs(),
        scss({
            failOnError: false,
            importer: sassImporter(),
            insert: false,
            outputStyle: 'expanded',
            output: 'build/styles.css',
        }),
        babel({exclude: 'node_modules/**'})
    ]
};