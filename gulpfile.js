const gulp = require('gulp');
const tap = require('gulp-tap');
const { repository, version } = require('./package.json');
const gitlabBlob = '/-/blob/';

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

gulp.task('vue', () => {
  return gulp.src(['./src/components/**/*.vue'])
    .pipe(tap(addHtmlHeader))
    .pipe(gulp.dest('./dist/components'));
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

gulp.task('js', () => {
  return gulp.src(['./src/mixins/*.js'])
    .pipe(tap(addHeader))
    .pipe(gulp.dest('./dist/mixins'));
});

gulp.task('default', gulp.parallel('vue', 'legacy-mixins', 'css', 'js'));
