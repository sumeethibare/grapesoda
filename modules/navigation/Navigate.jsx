"use client";
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Storage', href: '/storage' },
    { name: 'Community', href: '/community' },
    { name: 'Blog', href: '/blog' },
]

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="absolute inset-x-0 top-0 z-40">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center fixed justify-center rounded-md p-2.5 text-zinc-700 float-right right-5 top-5"
                        onClick={() => setMobileMenuOpen(true)}>
                        <Bars2Icon className="h-8 w-8 stroke-zinc-950 stroke-2" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden fixed lg:flex lg:gap-x-6 px-6 bg-slate-100 p-2 rounded-2xl">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-zinc-600 hover:text-zinc-950">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href='/hire' className="text-sm font-semibold leading-6 text-zinc-900">
                        Hire Me <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-zinc-700 float-right right-5 top-5 absolute"
                            onClick={() => setMobileMenuOpen(false)}>
                            <XMarkIcon className="h-8 w-8 stroke-zinc-950 stroke-2" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-zinc-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href} onClick={() => setMobileMenuOpen(true)}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-zinc-900 hover:bg-zinc-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a href='/hire'
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-2xl  font-semibold leading-7 text-zinc-900 hover:bg-zinc-50"
                                >
                                    Hire Me <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>

        </header>
    )
}
