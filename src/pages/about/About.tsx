import DisplayText from "../../components/DisplayText.tsx";
import NavbarVisiblePage from "../../containers/NavbarVisiblePage.tsx";

export default function About() {
    return (
        <NavbarVisiblePage>
            <DisplayText text={"About"} />
        </NavbarVisiblePage>
    )
}