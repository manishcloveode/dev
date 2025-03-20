import Link from "next/link"

export default function Footer() {
    return (
        <footer className="w-full bg-white py-12 px-4 md:px-6 lg:px-8">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Contact Me Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Contact Me</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#" className="text-gray-700 hover:text-gray-900 text-lg">
                                    Book a Call
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:mielucristian@gmail.com" className="text-gray-700 hover:text-gray-900 text-lg">
                                    mielucristian@gmail.com
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Useful Links Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Useful Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-gray-700 hover:text-gray-900 text-lg">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/404" className="text-gray-700 hover:text-gray-900 text-lg">
                                    404 Page
                                </Link>
                            </li>
                            <li>
                                <Link href="/licensing" className="text-gray-700 hover:text-gray-900 text-lg">
                                    Licensing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Social</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="https://framer.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-gray-900 text-lg"
                                >
                                    Framer
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://x.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-gray-900 text-lg"
                                >
                                    X
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-gray-900 text-lg"
                                >
                                    LinkedIn
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* COHESION Logo */}
                <div className="mb-6">
                    <h1 className="text-9xl  tracking-wide font-9xl font-black">C O H E S I O N</h1>
                </div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between text-sm text-gray-600">
                    <p>© Copyright 2025</p>
                    <p>
                        Made by{" "}
                        <Link href="https://ulhub.design" target="_blank" rel="noopener noreferrer" className="underline">
                            Ulhub.design
                        </Link>{" "}
                        in{" "}
                        <Link href="https://framer.com" target="_blank" rel="noopener noreferrer" className="underline">
                            Framer
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}

