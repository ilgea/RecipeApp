import {
  CardButton,
  CardImg,
  CardStyle,
  CardTitle,
  CardWrapper,
} from "./Card.style";
import defaultImage from "../../assets/default-image.jpg";
import { useNavigate } from "react-router-dom";

const Card = ({ recipes }) => {
  const navigate = useNavigate();
  //   console.log(recipes);
  return (
    <CardWrapper>
      {/* neden bir daha dest. yaptık */}
      {/* props ile aldığımız recipes içinde de ayrıca recipe geliyor. */}
      {/* Bunun içine girebilmek için ayrıca bir daha dest. yaptık. */}
      {recipes.map(({ recipe }, index) => {
        return (
          <CardStyle key={index}>
            <CardTitle>{recipe?.label}</CardTitle>
            {/* bazılarında resim olmayabilir. çıkabilecek hataları önlemek için default bir image koyduk */}
            <CardImg src={recipe?.image || defaultImage} alt="" />
            <CardButton
              // onClick sayesinde navigate kullanıyoruz.
              onClick={() => navigate("details", { state: recipe })}
            >
              View More
            </CardButton>
          </CardStyle>
        );
      })}
    </CardWrapper>
  );
};

export default Card;

// navigate("details", { state: recipe, replace: false })
// details: -> ilk arguman -> kullanıcıyı "detail" sayfasına yönlendiriyoruz
// state: recipe -> yeni sayfaya (details) veri aktarmada kullanıyoruz. aktarılacak veri recipe.
// state ismini bu şekilde kullanmamız gerekiyor.
// replace: false -> history'i silmemizi sağlıyor.çok şişmemesi için.
// false -> yeni sayfa tarayıcı geçmişine eklenir. yani kullanıcı geri tuşuna bastığında
// önceki sayfaya dönebilir. true olsaydı mevcut sayfa geçmişle yeni sayfa (details) ile değiştirilirdi.
