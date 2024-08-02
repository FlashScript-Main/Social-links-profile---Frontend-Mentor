import { FlashScript, UserProfile } from "./components"

const App = () => {

    return (
        <div className="min-h-screen w-full bg-neutral-off-black grid place-content-center">
            <UserProfile />

            <FlashScript />
        </div>
    )

}

export default App