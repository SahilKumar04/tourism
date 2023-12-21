'use client'
import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { useRouter } from 'next/navigation';
export default function Navbar() {
    const [items, setItems] = useState<{
        label: string;
        icon: string;
    }[]>([]);
    const router = useRouter();
    const handleMenuItemClick = (event:any) => {
        if (event.item.label === "Booking & Inquiry") {
            router.push("/home")
        }else if (event.item.label === "About Himalayas") {
            router.push("/home#about")
        } else if (event.item.label === "Contact Us") {
            router.push("/contactus")
        } else if (event.item.label === "Trip Planner") {
            router.push("/planyourtrip")
        } else if (event.item.label === "Tour & Packages") {
            router.push("/home#tours")
        } else if (event.item.label === "Romantic Getaway") {
            router.push("/home#Getaway")
        } else if (event.item.label === "Culture & Traditions") {
            router.push("/home#Getaway")
        } else if (event.item.label === "Natural Wonders") {
            router.push("/home#Getaway")
        }
    };

    // useEffect(() => {
    //     const linkElement = document.getElementById('prime-css');

    //     if (linkElement) {
    //         linkElement.setAttribute('href', `https://cdn.jsdelivr.net/npm/primereact@9.4.0/resources/themes/${theme}/theme.css`);
    //     } else {
    //         const newLinkElement = document.createElement('link');
    //         newLinkElement.setAttribute('rel', 'stylesheet');
    //         newLinkElement.setAttribute('type', 'text/css');
    //         newLinkElement.setAttribute('id', 'prime-css');
    //         newLinkElement.setAttribute('href', `https://cdn.jsdelivr.net/npm/primereact@9.4.0/resources/themes/${theme}/theme.css`);
    //         document.head.appendChild(newLinkElement);
    //     }
    // }, [theme]);

    useEffect(() => {
        const items = 
        [
            {
                label: 'Explore',
                icon: 'pi pi-fw pi-file',
                items:[
                    {
                       label:'About Himalayas',
                       icon:'pi pi-fw pi-calendar-minus',
                        command: handleMenuItemClick

                    },
                    {
                       label:'Culture & Traditions',
                       icon:'pi pi-fw pi-calendar-minus',
                       command: handleMenuItemClick
                    },
                    {
                       label:'Natural Wonders',
                       icon:'pi pi-fw pi-calendar-minus',
                       command: handleMenuItemClick
                    },
                    {
                       label:'Romantic Getaway',
                       icon:'pi pi-fw pi-calendar-minus',
                       command: handleMenuItemClick
                    }
                 ],
            },
            // {
            //     label: 'Journeys',
            //     icon: 'pi pi-fw pi-calendar',
            //     items:[
            //         {
            //            label:'Destinations Overview',
            //            icon:'pi pi-fw pi-calendar-minus',
            //            command: handleMenuItemClick
            //         },
            //         {
            //            label:'Trekking Routes',
            //            icon:'pi pi-fw pi-calendar-minus',
            //            command: handleMenuItemClick
            //         },
            //         {
            //            label:'Scenic Tours',
            //            icon:'pi pi-fw pi-calendar-minus',
            //            command: handleMenuItemClick
            //         },
            //         {
            //            label:'Pilgrimage Trails',
            //            icon:'pi pi-fw pi-calendar-minus',
            //            command: handleMenuItemClick
            //         }
            //      ],
            //     command: handleMenuItemClick
            // },
            // {
            //     label: 'Adventures',
            //     icon: 'pi pi-fw pi-shopping-bag',
            //     items:[
            //         {
            //            label:'Trekking & Hiking',
            //            icon:'pi pi-fw pi-calendar-minus',
            //             command: handleMenuItemClick
            //         },
            //         {
            //            label:'Mountaineering',
            //            icon:'pi pi-fw pi-calendar-minus',
            //             command: handleMenuItemClick
            //         },
            //         {
            //            label:'Rafting & Kayaking',
            //            icon:'pi pi-fw pi-calendar-minus',
            //             command: handleMenuItemClick
            //         },
            //         {
            //            label:'Wildlife Safaris',
            //            icon:'pi pi-fw pi-calendar-minus',
            //             command: handleMenuItemClick
            //         }
            //      ],
            //     command: handleMenuItemClick
            // },
            // {
            //     label: 'Inspiration',
            //     icon: 'pi pi-fw pi-file',
            //     items:[
            //         {
            //            label:'Photo Gallery',
            //            icon:'pi pi-fw pi-calendar-minus',
            //             command: handleMenuItemClick
            //         },
            //         {
            //            label:'Mountaineering',
            //            icon:'pi pi-fw pi-calendar-minus',
            //             command: handleMenuItemClick
            //         },
            //         {
            //            label:'Travel Stories',
            //            icon:'pi pi-fw pi-calendar-minus',
            //             command: handleMenuItemClick
            //         },
            //         {
            //            label:'Traveler Testimonials',
            //            icon:'pi pi-fw pi-calendar-minus',
            //             command: handleMenuItemClick
            //         }
            //      ],
            //     command: handleMenuItemClick
            // },
            {
                label: 'Connect',
                icon: 'pi pi-fw pi-calendar',
                items:[
                    {
                       label:'Booking & Inquiry',
                       icon:'pi pi-fw pi-calendar-minus',
                        command: handleMenuItemClick
                    },
                    {
                       label:'Contact Us',
                       icon:'pi pi-fw pi-calendar-minus',
                        command: handleMenuItemClick
                    },
                    // {
                    //    label:'Community Forum',
                    //    icon:'pi pi-fw pi-calendar-minus',
                    //     command: handleMenuItemClick
                    // }TOUR & PACKAGES
                 ]
            },
            {
                label:'Tour & Packages',
                icon:'pi pi-fw pi-calendar-minus',
                command: handleMenuItemClick

            },
            {
                label:'Trip Planner',
                icon:'pi pi-fw pi-calendar-minus',
                command: handleMenuItemClick

            },

        ]
        setItems(items)
    }, [])

    // const start = <img alt="logo" src="data:image/png;base64,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" height="40" width="40" className="mr-2" onClick={() => setVisible(true)}></img>;
    // const start = <img alt="logo" src="data:image/png;base64,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" height="40" width="40" className="mr-2" onClick={() => router.push("/home")}></img>;
    const start = <div className="mb-4 md:mb-0 cursor-pointer" onClick={()=> router.push("/home")}>
        <h1 className='text-black font-mono font-bold'>
            TRIPS IN HIMACHAL
        </h1>
    </div>
    // const end = 
    // <div className='flex justify-center items-center' style={{ gap: '1rem' }}>

    //     <i className="pi pi-shopping-cart p-overlay-badge" onClick={() => router.push('/cart')} style={{ fontSize: '2rem' }}>
    //         {/* <Badge value={`${cartItems.length}`} ></Badge> */}
    //     </i>
    // </div>
    // const [visible, setVisible] = useState(false);
    return (
        <>
            <div className="card sticky top-0 " style={{ zIndex: 99 }}>
                <Menubar model={items} end={start} className='items-center ' />
            </div>
            {/* <div className="card flex justify-content-center">
                <Sidebar visible={visible} onHide={() => setVisible(false)} style={{ width: '250px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                    <div style={{ padding: '20px', display:'flex',flexDirection:'column', alignItems:'flex-start'}}>
                        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>TRIPS IN HIMACHAL</h3>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center', gap:'8px' , cursor: 'pointer'}} onClick={() => handleAboutUsClick}>
                            <p>
                                About
                            </p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center', gap:'8px' , cursor: 'pointer'}} onClick={() => handleContactUsClick}>
                            <p>
                                Contact
                            </p>
                        </div>
                    </div>
                </Sidebar>
            </div> */}
        </>
    )
}