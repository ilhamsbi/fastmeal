class AppFooter extends HTMLElement {
    
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
     
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
             <style>
             footer 
                 {
                    padding: 5px;
                    color: #fff;
                    background-color: darkslategrey;
                    text-align: center;
                 }

                 @media only screen and (max-width: 1200px) 
                {
                    footer
                    {
                        font-size : 19px;
                        padding : 4px;
                    }
                }
                @media only screen and (max-width: 768px) 
                {
                    footer
                    {
                        font-size : 16px;
                        padding : 2px;
                    }
                }

             </style>
             <footer>    
                 <p>Submission &#169; 2023, Ilham Setyabudi<br>
             <footer>`;
    }
 }
  
 customElements.define("app-footer", AppFooter);