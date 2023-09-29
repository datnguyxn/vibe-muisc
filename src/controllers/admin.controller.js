class AdminController {
    show(req, res, next) {
        res.render('layouts/main', {title: 'test'});
    }
}
export default new AdminController();