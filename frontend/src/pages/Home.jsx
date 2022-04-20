import "../styles/main.css";
import IngredientCard from "@components/IngredientCard";
import alcoholList from "@assets/alcohol.json";
import fruitsList from "@assets/fruits.json";
import softList from "@assets/soft.json";
import othersList from "@assets/others.json";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./src/pages/homeScript.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <main>
        <div id="ingredients-finder">
          <div className="container">
            <div className="ingredients-box">
              <div className="ingredient-box">
                <img
                  className="ingredient1 anim1"
                  src="../src/assets/img/svg/icon.svg"
                  alt="question mark"
                />
              </div>
              <div className="ingredient-box">
                <img
                  className="ingredient2 anim2"
                  src="../src/assets/img/svg/icon.svg"
                  alt="question mark"
                />
              </div>
              <div className="ingredient-box">
                <img
                  className="ingredient3 anim3"
                  src="../src/assets/img/svg/icon.svg"
                  alt="question mark"
                />
              </div>
            </div>
            <button className="select-button" type="button">
              Select
            </button>
          </div>

          <div className="ingredients-list">
            <div className="full-box">
              <h2>Fruits</h2>
              {fruitsList.map((fruit) => (
                <IngredientCard
                  key={fruit.name}
                  name={fruit.name}
                  url={fruit.url}
                />
              ))}
            </div>
            <div className="ingredients-alcohols">
              <div className="full-box">
                <h2>Alcohol</h2>
                {alcoholList.map((alcohol) => (
                  <IngredientCard
                    key={alcohol.name}
                    name={alcohol.name}
                    url={alcohol.url}
                  />
                ))}
              </div>
            </div>
            <div className="ingredients-soft">
              <div className="full-box">
                <h2>Soft</h2>
                {softList.map((item) => (
                  <IngredientCard
                    key={item.name}
                    name={item.name}
                    url={item.url}
                  />
                ))}
              </div>
            </div>
            <div className="ingredients-others">
              <div className="full-box">
                <h2>Others</h2>
                {othersList.map((other) => (
                  <IngredientCard
                    key={other.name}
                    name={other.name}
                    url={other.url}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="search-results">Results</div>
        </div>
      </main>
    </div>
  );
}
