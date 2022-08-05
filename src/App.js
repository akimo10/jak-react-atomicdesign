import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

export default function App() {
  const user = {
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    name: "john",
    email: "12345@example.com",
    phone: "000-0000-0000",
    company: {
      name: "test株式会社"
    },
    website: "https://google.com"
  };
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
