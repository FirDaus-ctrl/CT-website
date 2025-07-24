import Image from "next/image"

export function ClientReferences() {
    return (
        <div>
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 py-16 text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 underline">Clients References</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client1.webp" alt="Client 1" width={150} height={10} />
                            <h3 className="text-xl font-semibold mt-4">Progresif</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client2.webp" alt="Client 2" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">Royal Brunei Airlines</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client3.webp" alt="Client 3" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">Brunei Halal Foods</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client4.webp" alt="DST" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">DST</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client5.webp" alt="Client 5" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">Bank Islam Brunei Darussalam</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client6.webp" alt="Client 6" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">Royal Brunei Culinary</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client7.webp" alt="Client 7" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">Darussalam Assets</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client8.webp" alt="Client 8" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">Armada Properties</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client9.webp" alt="Client 9" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">Bandtree</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client10.webp" alt="Client 10" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">Jerudong Park Medical Centre</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client11.webp" alt="Client 11" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">Petroleum Authority of Brunei Darussalam</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client12.webp" alt="Client 12" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">Berakas Power Company</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client13.webp" alt="Client 13" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">BIACC</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client14.webp" alt="Client 14" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">Imagine</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client15.webp" alt="Client 15" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">PDS</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client16.webp" alt="Client 16" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">Muara Maritime Services</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client17.webp" alt="Client 17" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">Jerudong International School</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md"> 
                            <Image src="/images/client18.webp" alt="Client 18" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">Takaful Brunei</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image src="/images/client19.webp" alt="Client 19" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">MPC</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md"> 
                            <Image src="/images/client20.webp" alt="Client 20" width={150} height={150} />
                            <h3 className="text-xl font-semibold mt-4">Brunei Fertilizer industry</h3>
                        </div>
                    </div>
                </div>
            </section>    
        </div>
    )
}