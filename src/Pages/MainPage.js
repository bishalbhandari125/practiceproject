import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { UilGoogleDrive, UilDropbox, UilClouds } from '@iconscout/react-unicons'
// import { Switch } from '@headlessui/react'



import {
    PlusIcon,
    Bars3Icon,
    BookmarkSquareIcon,
    FireIcon,
    HomeIcon,
    XMarkIcon,
    CogIcon
} from '@heroicons/react/24/outline'
import axios from 'axios'
import UploadedDoc from '../Components/UploadedDoc'
import LastColData from '../Components/LastColData'
import LastColDetails from '../Components/LastColDetails'
import MainPdfReader from '../Components/MainPdfReader'

const user = {
    name: 'Emily Selman',
    email: 'emily.selman@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const setting = {
    name: 'Setting',
    href: '#',
    icon: CogIcon
}


const navigation = [
    { name: 'Upload', href: '#', icon: PlusIcon },
    { name: 'Home', href: '#', icon: HomeIcon },
    { name: 'Trending', href: '#', icon: FireIcon },
    { name: 'Bookmarks', href: '#', icon: BookmarkSquareIcon },
    { name: 'Setting', href: '#', icon: CogIcon },
]


export default function MainPage() {
    const [file, setFile] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [enabled, setEnabled] = useState(false)


    const handleChange =  async (e) => {
        setFile(e.target.files[0]);

        const formData = new FormData();
        formData.append("file", file);
    
        console.log(...formData);
        // const config = {
        //   headers: {
        //     "content-type": "multipart/form-data",
        //   },
        // };
        // await axios.post("http://127.0.0.1:8000/api/uploads/", formData, config);
        // .then((response)=>{
        //     console.log(response);
        // })
    };

    return (
        <>
            <div className="flex h-screen">
                <Transition.Root show={mobileMenuOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-4">
                                            <button
                                                type="button"
                                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="pt-5 pb-4">
                                        <div className="flex flex-shrink-0 items-center px-4">
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                                alt="Your Company"
                                            />
                                        </div>
                                        <nav aria-label="Sidebar" className="mt-4">
                                            <div className="space-y-1 px-2">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="group flex items-center rounded-md p-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                    >
                                                        <item.icon
                                                            className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                            aria-hidden="true"
                                                        />
                                                        {item.name}
                                                    </a>
                                                ))}
                                                <a
                                                    key={setting.name}
                                                    href={setting.href}
                                                    className="group flex items-center rounded-md p-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                >
                                                    <setting.icon
                                                        className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                        aria-hidden="true"
                                                    />
                                                    {setting.name}
                                                </a>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="flex flex-shrink-0 border-t border-gray-200 p-4 hover:bg-blue-300">
                                        <a href="#" className="group block flex-shrink-0">
                                            <div className="flex items-center">
                                                <div>
                                                    <img className="inline-block h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">{user.name}</p>
                                                    <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                                                        Account Settings
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="w-14 flex-shrink-0" aria-hidden="true">
                                {/* Force sidebar to shrink to fit close icon */}
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:flex lg:flex-shrink-0">
                    <div className="flex w-20 flex-col">
                        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-black">
                            <div className="flex-1">
                                <div className="flex items-center justify-center bg-black py-4">
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=white"
                                        alt="Your Company"
                                    />
                                </div>
                                <nav aria-label="Sidebar" className="flex flex-col items-center space-y-2 py-3">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center rounded-lg px-4 py-3 text-indigo-200 hover:bg-indigo-700"
                                        >
                                            <item.icon className="h-6 w-6" aria-hidden="true" />
                                            <span className="sr-only">{item.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex flex-shrink-0 pb-5">
                                <a href="#" className="w-full flex-shrink-0">
                                    <img className="mx-auto block h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                    <div className="sr-only">
                                        <p>{user.name}</p>
                                        <p>Account settings</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
                    {/* Mobile top navigation */}
                    <div className="lg:hidden">
                        <div className="flex items-center justify-between bg-indigo-600 py-2 px-4 sm:px-6 lg:px-8">
                            <div>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=white"
                                    alt="Your Company"
                                />
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    onClick={() => setMobileMenuOpen(true)}
                                >
                                    <span className="sr-only">Open sidebar</span>
                                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>



                    {/* Navigation and sidebar ends here and main col are started from here */}
                    <main className="flex flex-1 overflow-hidden">

                        {/* Docx and pdf are uploaded from this component */}
                        {/* Secondary column (hidden on smaller screens) shows when button is clicked in sidebar*/}
                        <aside className="hidden lg:order-first lg:block lg:flex-shrink-0">
                            <div className="relative flex h-full w-48 flex-col overflow-y-auto border-r border-gray-200 bg-gray-900 text-gray-200">
                                <h1 className='font-semibold text-xl ml-1'>Import your Media</h1>
                                <h2 className='text-xs font-semibold text-center'>PDF , DOCX</h2>
                                <form onChange={handleChange}>
                                    <label
                                        htmlFor='file'
                                        className='flex flex-col items-center justify-center h-auto grid-flow-row gap-2 bg-blue-600 border-2 border-gray-300  rounded-lg cursor-pointer px-9 m-2'
                                    >
                                        <div className="flex pb-2">
                                            <AiOutlinePlusCircle className='w-7 h-7 -ml-5 text-white bg-blue-600 rounded-full mt-2' />
                                            <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                                                <input
                                                    id='file'
                                                    type='file'
                                                    accept='application/pdf,application/msword'
                                                    // onChange={handleChange}
                                                    className='p-1 px-2 font-bold text-gray-100 bg-blue-500 rounded-lg hidden'
                                                />
                                            </p>
                                            <h3 className="text-md text-white ml-2 mt-3">Upload File</h3>
                                        </div>
                                    </label>
                                </form>

                             


                                {/* Uploading fom google,and other */}
                                <div className='flex flex-col text-center font-semibold'>
                                    <button className=' flex flex-row gap-3 pl-2 py-2  '><UilClouds/>One Drive</button>
                                    <hr></hr>
                                    <button className=' flex flex-row gap-3 pl-2 py-2'><UilGoogleDrive />Google Drive</button>
                                    <hr></hr>
                                    <button className=' flex flex-row gap-3 pl-2 py-2'><UilDropbox/>Dropbox</button>
                                    <hr></hr>
                                </div>

                                {/* uploaded image from file upload */}
                                {/* <UploadedDoc file = {file} /> */}
                            </div>
                        </aside>




                        {/* Main column */}
                        {/* page where pdf will be displayed */}
                        <section
                            aria-labelledby="primary-heading"
                            className="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last"
                        >
                            <MainPdfReader />
                        </section>




                        {/* Secondlast col displaying details about entities,chunks ,etc */}
                        <aside className="hidden lg:order-last lg:block lg:flex-shrink-0">
                            <LastColDetails />
                        </aside>



                        {/* LAST column (hidden on smaller screens) */}
                        <aside className="hidden lg:order-last lg:block lg:flex-shrink-0">
                            <LastColData />
                        </aside>
                    </main>
                </div>
            </div>
        </>
    )
}


