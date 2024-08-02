import { jessicaImage } from "../assets"
import { userInfo, userLinks, userLocation, userName } from "../constants"

const UserProfile = () => {

    return (
        <div className={`w-[325px] md:w-[380px] py-6 md:py-8 | text-center font-inter bg-neutral-dark-grey rounded-xl | flex justify-center items-center flex-col gap-2 | `}>
            <img 
                src={jessicaImage} 
                alt="User Profile Image" 
                className={`w-20 h-20 | rounded-full |  | `}
            />

            <h3 className={`mt-4 | text-2xl text-neutral-white font-normal |  | `}>
                {userName}
            </h3>

            <h5 className={`mb-4 | text-sm text-primary-green font-semibold |  | `}>
                {userLocation}
            </h5>

            <p className={` | text-sm text-neutral-white font-normal |  | `}>
                {userInfo}
            </p>

            <ul className={`w-full mt-4 md:mt-5 mb-2 space-y-4 |  |  | `}>
                {userLinks.map((item) => (
                    <li key={item.id}>
                        <a 
                            href={item.href} 
                            className={`py-3 w-10/12 md:w-[80%] mx-auto inline-block | text-neutral-white font-semibold bg-neutral-grey rounded-lg hover:bg-primary-green hover:text-neutral-dark-grey transition-colors |  | `}
                        >
                            {item.linkName}
                        </a> 
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default UserProfile