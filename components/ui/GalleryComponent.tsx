'use client'
import useGallery from "@/lib/api/gallery";

const GalleryComponent = () => {
    const {gallery, isLoading, isError, error, refetch} = useGallery();
    console.log(gallery);
    return (
    <section className="container mb-10 sm:mb-20">
        <h2 className="text-[22px] sm:text-[32px] font-semibold text-center mb-8 sm:mb-12">Image Gallery</h2>
        <div className="image-gallery block sm:grid gap-x-4 md:gap-x-6">
            {
                gallery.map((item: any) => (
                    <div key={item.id} className={`item item${item.id} transition-all duration-300`}>
                        <img src={item.image} alt="gallery"/>
                    </div>
                ))
            }
        </div> 
    </section>
    )
}

export default GalleryComponent