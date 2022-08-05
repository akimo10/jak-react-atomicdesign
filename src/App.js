import { BrowserRouter } from "react-router-dom";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaltLayout } from "./components/templates/DefaltLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";
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
    <BrowserRouter>
      <DefaltLayout>
        <SearchInput />
        <UserCard user={user} />
      </DefaltLayout>
    </BrowserRouter>
  );
}
