class AppBar extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
   
    connectedCallback(){
      this.render();
    }
   
    render() {
      this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            display: block;
            width: 100%;
            background-image: url("https://dolandolen.com/wp-content/uploads/2017/12/Sarapan-di-Jogja.jpg");
            background-size: 1550px;
            color: white;
            box-shadow: 0 8px 12px -4px grey;
          }
          h2 {
            padding: 16px;
            text-align: center;
            text-shadow: 2px 2px 4px #000000;
          }

            img {
              display: flex;
              margin-left: auto;
              margin-right: auto;
              max-height: 300px;
              object-fit: cover;
              object-position: center;
              padding-bottom: 25px;
            }

        </style>
        
        <h2>Pencarian Resep Makanan</h2>
        <img src="https://cdn-icons-png.flaticon.com/512/5294/5294517.png"/>
      `;
    }
  }
   
  customElements.define('app-bar', AppBar);