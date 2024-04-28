import NavbarVisiblePage from "../../containers/NavbarVisiblePage.tsx";
import DisplayText from "../../components/DisplayText.tsx";

export default function Home() {
    return (
        <NavbarVisiblePage>
            <DisplayText text={"Home"} />
        </NavbarVisiblePage>
    )
}