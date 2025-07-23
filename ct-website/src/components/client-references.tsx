import Image from "next/image"

export function ClientReferences() {
    return (
        <div>
            <section>
                <div className="container mx-auto px-4 py-16">
                    <h2>Our Clients References</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client1.webp" alt="Client 1" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">Client 1</h3>
                            <p className="text-gray-600">Description of Client 1's project and collaboration.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client2.webp" alt="Client 2" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">Client 2</h3>
                            <p className="text-gray-600">Description of Client 2's project and collaboration.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client3.webp" alt="Client 3" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">Client 3</h3>
                            <p className="text-gray-600">Description of Client 3's project and collaboration.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client4.webp" alt="Client 4" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">Client 4</h3>
                            <p className="text-gray-600">Description of Client 4's project and collaboration.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client5.webp" alt="Client 5" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">Client 5</h3>
                            <p className="text-gray-600">Description of Client 5's project and collaboration.</p>
                        </div>
                    </div>
                </div>
            </section>    
        </div>
    )