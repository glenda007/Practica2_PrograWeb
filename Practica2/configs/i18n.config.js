import i18n from 'i18n';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

i18n.configure({
    locales: ['es', 'en'],
    directory: path.join(__dirname, '../locales'),
    defaultLocale: 'es',
    cookie: 'lang',
    queryParameter: 'lang',
    autoReload: true,
    syncFiles: true
});

export default i18n;