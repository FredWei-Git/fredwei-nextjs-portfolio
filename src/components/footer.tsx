import React from "react"

const Footer = () => {
    return (
        <footer className="px-4 mx-auto sm:px-6">
            <hr className="w-full h-0.5 mx-auto mt-8 bg-teal-500 border-0"></hr>
            <div className="flex flex-col p-4 mx-auto text-center text-neutral-900 md:flex-row md:justify-between">
                <div className="flex flex-row items-center justify-center space-x-1 text-black-500 dark:text-neutral-100">
                    2024 Fred Wei<a href="/" className="hover:underline"></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer