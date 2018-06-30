import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import scss from 'rollup-plugin-scss';
import sass from 'rollup-plugin-sass';
import {
    uglify
} from 'rollup-plugin-uglify';

export default {
    entry: 'source/script.js',
    dest: 'build/main.js',
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
        scss({
            output: './build/styles.css',
        }),
        sass(),
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        babel({
            exclude: ['node_modules/**', 'source/styles.scss']
        }),
        replace({
            exclude: 'node_modules/**',
            ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        uglify()
    ]
};