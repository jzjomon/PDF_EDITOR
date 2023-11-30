import { baseURL } from "../constants/baseURL"


const NavBar = () => {
    return (
        <>
            <nav className="bg-white sticky top-0 z-50 border-gray-200 dark:bg-gray-900 py-3">
                <div className="w-full flex justify-center py-2">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={`${baseURL}/pdf.png`} className="h-10" alt="PDF EDITER Logo" />
                        <span className="self-center  text-4xl font-bold whitespace-nowrap dark:text-white">PDF EDITOR</span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar