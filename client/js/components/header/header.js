export class Header {

    render(component, data = {}) {
        let nav = `
             <div class="container">
                <div class="text-center my-5">
                    <h1 class="fw-bolder">Welcome to my store</h1>
                </div>
            </div>
        `;
        document.getElementById('header').innerHTML = nav;
        component.render(data);
    }
}