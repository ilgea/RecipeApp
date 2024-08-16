import {
  FormButton,
  FormContainer,
  FormInput,
  FormSelect,
  HeaderStyled,
  HeaderTitle,
} from "./Header.style";

const Header = ({ getData, setQuerry, mealType, setSelectedMeal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <HeaderStyled>
      <HeaderTitle>Recipe App</HeaderTitle>
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Search"
          onChange={(e) => setQuerry(e.target.value)}
        />
        <FormButton type="submit">Search</FormButton>
        <FormSelect
          name="mealType"
          id="mealType"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealType.map((meal, index) => {
            return (
              <option key={index} value={meal}>
                {meal}
              </option>
            );
          })}
        </FormSelect>
      </FormContainer>
    </HeaderStyled>
  );
};

export default Header;
