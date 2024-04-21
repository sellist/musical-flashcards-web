import NavigationContainer from "../../containers/NavigationContainer.tsx";
import DisplayText from "../../components/DisplayText.tsx";

export default function Contact() {
    return (

        <div>
            <NavigationContainer />
            <DisplayText text={"Contact"} />
            <DisplayText text={"Repository: https://github.com/sellist/musical-flashcards-web"} />
            {/* can do a thing where you can submit emails in the future */}
        </div>
    )
}