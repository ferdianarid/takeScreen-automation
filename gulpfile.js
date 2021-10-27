const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function() {
    gulp
        .src("dist/js/*.js", { base: "./" })
        .pipe(
            gap.prependText(`/*!
*/`)
        )
        .pipe(gulp.dest("./", { overwrite: true }));

    gulp
        .src("dist/index.html", { base: "./" })
        .pipe(
            gap.prependText(`<!--
-->`)
        )
        .pipe(gulp.dest("./", { overwrite: true }));

    gulp
        .src("dist/css/*.css", { base: "./" })
        .pipe(
            gap.prependText(`/*!
*/`)
        )
        .pipe(gulp.dest("./", { overwrite: true }));
    return;
});