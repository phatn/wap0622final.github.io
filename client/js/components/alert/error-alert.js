export class ErrorAlert {

    render(message = '') {
        let nav = `
            <div class="alert-popup">
                 <div class="alert alert-danger alert-dismissible fade show">
                    ${message}
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            </div>
        `;
        let notificationElement = document.getElementById('notification');
        notificationElement.innerHTML = nav;
        window.setTimeout(function() {
            notificationElement.innerHTML = ''
        }, 5000);
    }

    remove() {
        document.getElementById('notification').innerHTML = '';
    }
}