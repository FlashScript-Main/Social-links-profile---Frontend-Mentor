import { FlashScript, UserProfile } from "./components"

const App = () => {

    return (
        <div className="min-h-screen w-full bg-neutral-eggshell grid place-content-center">
            <UserProfile />
            
            <FlashScript />
        </div>
    )

}

export default App