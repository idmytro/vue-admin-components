const { exec } = require('child_process');

const gulp = require('gulp');
const { watch } = require('gulp');
const tap = require('gulp-tap');
const removeHtmlComments = require('gulp-remove-html-comments');
const replace = require('gulp-replace');
const rename = require('gulp-rename');

const { repository, version, scripts } = require('./package.json');
const gitlabBlob = '/-/blob/';

const paths = {
  content: [
    'src/**/*.vue',
    'src/**/*.js',
  ],
};

function addHtmlHeader (file) {
  const path = [
    repository.url.replace('.git', ''),
    gitlabBlob,
    `v${version}`,
    file.path.replace(__dirname, ''),
  ].join('');
  file.contents = Buffer.concat([
    Buffer.from(`<!-- ${path} -->\n\n`),
    file.contents,
  ]);
}

function addHeader (file) {
  const path = [
    repository.url.replace('.git', ''),
    gitlabBlob,
    `v${version}`,
    file.path.replace(__dirname, ''),
  ].join('');
  file.contents = Buffer.concat([
    Buffer.from(`/* ${path} */\n\n`),
    file.contents,
  ]);
}

gulp.task('legacy-vue', () => {
  return gulp.src([
    './src/components/**/*.legacy.vue',
  ])
    .pipe(tap(addHtmlHeader))
    .pipe(gulp.dest('./dist/components'));
});

gulp.task('es-vue', () => {
  return gulp.src([
    './src/components/**/*.es.vue',
  ])
    .pipe(removeHtmlComments())
    .pipe(replace('\n<template', '<template'))
    .pipe(replace('\n<script', '<script'))
    .pipe(replace('\n<style', '<style'))
    // .pipe(replace(/\n\n/g, '\n'))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('.es', '');
    }))
    .pipe(gulp.dest('./dist-es/components'));
});

gulp.task('legacy-mixins', () => {
  return gulp.src(['./src/mixins/**/*.vue'])
    .pipe(tap(addHtmlHeader))
    .pipe(gulp.dest('./dist/mixins'));
});

gulp.task('css', () => {
  return gulp.src(['./src/**/*.css'])
    .pipe(tap(addHeader))
    .pipe(gulp.dest('./dist'));
});

gulp.task('js-mixins', () => {
  return gulp.src(['./src/mixins/*.js'])
    .pipe(tap(addHeader))
    .pipe(gulp.dest('./dist/mixins'));
});

gulp.task('js', () => {
  return gulp.src(['./src/components/**/*.js'])
    .pipe(tap(addHeader))
    .pipe(gulp.dest('./dist/components'));
});

const runWindiCSS = () => exec(scripts.windicss);

const watchFiles = () => watch(paths.content, runWindiCSS);

exports.watch = watchFiles;

gulp.task('default', gulp.parallel('legacy-vue', 'legacy-mixins', 'css'));
