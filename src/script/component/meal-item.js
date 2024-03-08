class MealItem extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
   
    set meal(meal) {
      this._meal = meal;
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
            margin-bottom: 25px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 20px;
            overflow: hidden;
          }
          
          .fan-art-meal {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
          }
          
          .meal-info {
            padding: 24px;
            background-color: aliceblue;
          }
          
          .meal-info > h2 {
            font-weight: lighter;
          }
          
          .meal-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 20; /* number of lines to show */
          }

          table {
            width: 100%;
          }
          td{
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 7px;
          }
        </style>
        
        <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="Fan Art">
        <div class="meal-info">
          <h2>${this._meal.strMeal}</h2>
          <p>${this._meal.strArea} | ${this._meal.strCategory} </p><br>
          <h5>Ingredients :</h5> 
          <p>
          <table>
            <tr>
              <td>${this._meal.strMeasure1} ${this._meal.strIngredient1}</td>
              <td>${this._meal.strMeasure11} ${this._meal.strIngredient11}</td>
            </tr>
            <tr>
              <td>${this._meal.strMeasure2} ${this._meal.strIngredient2}</td>
              <td>${this._meal.strMeasure12} ${this._meal.strIngredient12}</td>
            </tr>
            <tr>
              <td>${this._meal.strMeasure3} ${this._meal.strIngredient3}</td>
              <td>${this._meal.strMeasure13} ${this._meal.strIngredient13}</td>
            </tr>
            <tr>
              <td>${this._meal.strMeasure4} ${this._meal.strIngredient4}</td>
              <td>${this._meal.strMeasure14} ${this._meal.strIngredient14}</td>
            </tr>
            <tr>
              <td>${this._meal.strMeasure5} ${this._meal.strIngredient5}</td>
              <td>${this._meal.strMeasure15} ${this._meal.strIngredient15}</td>
            </tr>
            <tr>
              <td>${this._meal.strMeasure6} ${this._meal.strIngredient6}</td>
              <td>${this._meal.strMeasure16} ${this._meal.strIngredient16}</td>
            </tr>
            <tr>
              <td>${this._meal.strMeasure7} ${this._meal.strIngredient7}</td>
              <td>${this._meal.strMeasure17} ${this._meal.strIngredient17}</td>
            </tr>
            <tr>
              <td>${this._meal.strMeasure8} ${this._meal.strIngredient8}</td>
              <td>${this._meal.strMeasure18} ${this._meal.strIngredient18}</td>
            </tr>
            <tr>
              <td>${this._meal.strMeasure9} ${this._meal.strIngredient9}</td>
              <td>${this._meal.strMeasure19} ${this._meal.strIngredient19}</td>
            </tr>
            <tr>
              <td>${this._meal.strMeasure10} ${this._meal.strIngredient10}</td>
              <td>${this._meal.strMeasure20} ${this._meal.strIngredient20}</td>
            </tr>
          </table>

          <h5>Steps : <br></h5>
          <p>${this._meal.strInstructions}</p>
        </div>
      `;
    }
    }
   
  customElements.define('meal-item', MealItem);