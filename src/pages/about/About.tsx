import DisplayText from "../../components/DisplayText.tsx";
import NavigationContainer from "../../containers/NavigationContainer.tsx";

export default function About() {
    return (
        <div>
            <NavigationContainer />
            <DisplayText text={"About"} />
        </div>
    )
}