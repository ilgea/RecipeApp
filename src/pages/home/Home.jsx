import { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import homeSvg from "../../assets/home.svg";
import { HomeContainer, HomeImg, HomeImgDiv, NotFoundText } from "./Home.style";
import Card from "../../components/card/Card";
import { useEffect } from "react";

const Home = () => {
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [querry, setQuerry] = useState("");
  // const [recipes, setRecipes] = useState(null);
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = sessionStorage.getItem("recipes");
    return savedRecipes ? JSON.parse(savedRecipes) : null;
  });
  const mealType = ["Breakfast", "Dinner", "Lunch", "Snack", "Teatime"];

  // const APP_ID = process.env.REACT_APP_APP_ID;
  // const APP_KEY = process.env.REACT_APP_APP_KEY;
  const APP_ID = "227aa975";
  const APP_KEY = "65eed218c24bd7732ea744a0c3bdd41e";

  const url = `https://api.edamam.com/search?q=${querry}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  // console.log(url);

  useEffect(() => {
    if (recipes) {
      sessionStorage.setItem("recipes", JSON.stringify(recipes));
    }
  }, [recipes]);

  const getData = async () => {
    if (querry) {
      try {
        const { data } = await axios(url);
        console.log("data.hits", data.hits);
        // gelen data'yı ileride kullanabilmemiz için state'e atıyoruz. ihtiyacımız olan veriler hits içerisinde recipe'de.
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Fill the form");
    }
  };

  return (
    <HomeContainer>
      <Header
        getData={getData}
        setQuerry={setQuerry}
        mealType={mealType}
        setSelectedMeal={setSelectedMeal}
      />
      {!recipes && (
        <HomeImgDiv>
          <HomeImg src={homeSvg} />
        </HomeImgDiv>
      )}

      {recipes?.length === 0 && (
        <NotFoundText>Sorry, The Food can not be found!</NotFoundText>
      )}
      {recipes?.length > 0 && <Card recipes={recipes} />}
    </HomeContainer>
  );
};

export default Home;
