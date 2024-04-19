import "./App.css";
import AppLaout from "./UI/AppLayout";
import SideBarContainer from "./UI/SideBarContainer";
import HeaderContainer from "./UI/HeaderContainer";
import MainContainer from "./UI/MainContainer";
import SideBar from "./Components/SideBar";
import Search from "./Components/Search";

function App() {
  return (
    <>
      <AppLaout>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
        <HeaderContainer>
          <Search />
        </HeaderContainer>
        <MainContainer></MainContainer>
      </AppLaout>
    </>
  );
}

export default App;
