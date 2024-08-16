import { useLocation, useNavigate } from "react-router-dom";
import {
  DetailButtonBack,
  DetailContainer,
  DetailHeader,
  DetailImg,
  DetailInfo,
  DetailIngred,
  DetailTitle,
  DietImg,
} from "./Details.style";
import dietSvg from "../../assets/diet.svg";

const Details = () => {
  const navigate = useNavigate();

  // state'den veriyi useLocation ile çekiyoruz.
  const { state } = useLocation();
  console.log("state geldi mi", state);
  return (
    <DetailContainer>
      <DetailHeader>
        <DetailTitle>{state.label}</DetailTitle>
        <DietImg src={dietSvg} />
      </DetailHeader>

      <DetailInfo>
        <div>
          <h3>Nutrients</h3>
          {state.digest.slice(0, 6).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
              {item.unit}
            </p>
          ))}

          <p>
            {state.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
            {state.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>Calories : {Math.round(state.calories)}</p>
          <p>Total Weight : {Math.round(state.totalWeight)}</p>
        </div>
        <div>
          <DetailImg src={state.image} alt="" />
        </div>
        <DetailIngred>
          <h3>Ingredient</h3>
          {state.ingredientLines.map((item, index) => (
            <p>
              {index + 1}- {item}
            </p>
          ))}
        </DetailIngred>
      </DetailInfo>
      <DetailButtonBack onClick={() => navigate(-1)}>Geri</DetailButtonBack>
    </DetailContainer>
  );
};

export default Details;
