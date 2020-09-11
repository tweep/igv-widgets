import AlertDialog from './alertDialog.js';

class AlertSingleton {
    constructor(root) {

        console.log('AlertSingleton instance');

        if (root) {
            this.alertDialog = undefined;
        }
    }

    init(root) {
        this.alertDialog = new AlertDialog(root);
    }

    present(alert, callback) {
        this.alertDialog.present(alert, callback);
    }

}

export default new AlertSingleton();