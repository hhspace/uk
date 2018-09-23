import path from '../paths/path';
import browserSync from 'browser-sync';
const server = browserSync.create();


export function reload(done) {
  server.reload();
  done();
}

export function serve(done) {
  server.init({
    proxy: 'http://localhost:8000',
  });
  done();
}