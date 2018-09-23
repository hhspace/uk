import del from 'del';
import path from '../paths/path';

export const clean = () => {
    return del(path.path.clean.main);
};