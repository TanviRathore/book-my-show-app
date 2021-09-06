import React from "react";
import EntertainmentCardSlider from "../components/EntertainmentCard/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

function HomePage() {

    const recommendedMovies = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODQlICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-zbbswydmwv-portrait.jpg",
            title: "Fast and Furious 9",
            subtitle: "Action / Adventure / Crime / Thriller",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTMlICAxN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-rhfsjjrlrc-portrait.jpg",
            title: "Shang-Chi and Legends of Ten Rings",
            subtitle: "Action / Adventure / Fantasy",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICAyM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00117102-gukaentnqs-portrait.jpg",
            title: "Bell Bottom",
            subtitle: "Action / Thriller",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjclICAxMWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00102880-eudztbwuwx-portrait.jpg",
            title: "Chehre",
            subtitle: "Mystery / Thriller",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-djhnmgmtvw-portrait.jpg",
            title: "The Conjuring: The Devil Made me do it",
            subtitle: "Horror / Thriller",
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-secrets-we-keep-et00137312-20-05-2021-10-39-32.jpg",
            title: "The Secerts We Keeps",
            subtitle: "Drama / Thriller",
        },
    ];

    const premierMovies = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            title: "The Balkan Line",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137316-unmwlqfqvd-portrait.jpg",
            title: "The Nest",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-uwreepnzec-portrait.jpg",
            title: "Resistance",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302293-savbwcehey-portrait.jpg",
            title: "Radioactive",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
            title: "The Secret We Keeps",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137455-pxtjxgdyua-portrait.jpg",
            title: "Capone (2020)",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302306-xxwtjnexzz-portrait.jpg",
            title: "Proximity",
            subtitle: "English",
        },
    ];

    const onlineStreamEvents = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCA2IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-xqqvejluju-portrait.jpg",
            title: "FrontRow Open Mic",
            subtitle: "Watch on Zoom",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMSBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00131530-wdztwjrckv-portrait.jpg",
            title: "Magic Beans - Classic Saturdays",
            subtitle: "Online Streaming",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00131211-rjskhskmwf-portrait.jpg",
            title: "Art and Craft Online Workshop",
            subtitle: "Watch on Zoom",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCA3IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00307978-heetgadvtr-portrait.jpg",
            title: "Smartphone Photography - Unleashed Pro Mode",
            subtitle: "Watch on Zoom",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCA3IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00310715-whkawgckdy-portrait.jpg",
            title: "Back pain relief Program",
            subtitle: "Watch on Zoom",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314464-vvjyftytnt-portrait.jpg",
            title: "Creating Worldless Stories",
            subtitle: "Watch on Zoom",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCA3IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00301602-xwurxcckah-portrait.jpg",
            title: "Diabetes is Curable",
            subtitle: "Watch on Zoom",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCA3IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00308749-ytuftqedkz-portrait.jpg",
            title: "Improve your Mental Health",
            subtitle: "Online Streaming",
        },
    ];

    return (
        <>
            <HeroCarousel />

           <div className="bg-darkBackground-50  w-full">
            <div className="container mx-auto px-4 md:px-12 my-8">
                    <PosterSlider 
                        title="Recommended Movies"
                        subtitle="List of recommended Movies"
                        posters={recommendedMovies}
                        isDark={false}
                    />
                </div>

                <div className="container mx-auto px-4 md:px-12 my-8">
                    <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
                        The best of Entertainment
                    </h1>
                    <EntertainmentCardSlider />
                </div>

                <div className="bg-premier-800 py-12">
                    <div className="container mx-auto px-4 md:px-12 my-8">
                        <div className="hidden md:flex">
                            <img 
                                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                                alt="RuPay"
                                className="w-full h-full"
                            />
                        </div>
                        <PosterSlider 
                            title="Premiers"
                            subtitle="Brand new releases every Friday"
                            posters={premierMovies}
                            isDark={true}
                        />
                    </div>
                </div>

                <div className="container mx-auto px-4 md:px-12 my-8">
                    <PosterSlider 
                        title="Online Streaming Events"
                        subtitle=""
                        posters={onlineStreamEvents}
                        isDark={false}
                    />
                </div>
           </div>

        </>
    );
}

export default HomePage;