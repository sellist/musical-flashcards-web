
import DisplayText from "../../components/DisplayText.tsx";
import NavbarVisiblePage from "../../containers/NavbarVisiblePage.tsx";

export default function Contact() {
    return (
        <NavbarVisiblePage>
            <DisplayText text={"Contact"} />
            <DisplayText text={"Repository: https://github.com/sellist/musical-flashcards-web"} />
            {/* can do a thing where you can submit emails in the future */}
        </NavbarVisiblePage>
    )
}