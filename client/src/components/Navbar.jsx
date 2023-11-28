

const NavBar = () => {
    return (
        <>
            <nav class="bg-white border-gray-200 dark:bg-gray-900 my-3">
                <div class="w-full flex justify-center py-2">
                    <div class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="pdf.png" class="h-10" alt="PDF EDITER Logo" />
                        <span class="self-center  text-4xl font-bold whitespace-nowrap dark:text-white">PDF EDITOR</span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar