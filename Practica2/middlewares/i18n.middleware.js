import i18n from '../configs/i18n.config.js';

const i18nMiddleware = (req, res, next) => {
    i18n.init(req, res);
    next();
};

export default i18nMiddleware;