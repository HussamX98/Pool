
export interface ICard{
    description: string,
    title: string,
    src: string,
    balance:string,
    id:string,
}

export const cards = [
  {
    description: "Lana Del Rey",
    title: "Summer Trip",
    src: "https://t3.ftcdn.net/jpg/06/68/11/18/360_F_668111880_NH7cwX2w34vAjMtQnBON3th1NKPXxAiR.jpg",
    balance:"300",
    id:"1",
  },
  {
    description: "Babbu Maan",
    title: "Rent",
    src: "https://www.incharge.org/wp-content/uploads/2019/08/lower-rent.jpg",
    balance:"900",
    id:"2",
  },

  {
    description: "Metallica",
    title: "Golf With The Boyz",
    src: "https://wallpapers.com/images/hd/cool-golf-ball-over-sunset-shot-nrh0g9djgo8hxa35.jpg",
    balance:"1600",
    id:"3",
  },
  {
    description: "Weekly Groceries",
    title: "Weekly Groceries",
    src: "https://png.pngtree.com/thumb_back/fh260/background/20240409/pngtree-empty-shopping-basket-on-wood-table-over-grocery-store-supermarket-blur-image_15653639.jpg",
    balance:"2700",
    id:"4",
  },
  {
    description: "Paris Trip",
    title: "Paris Trip",
    src: "https://res.cloudinary.com/gimmersta-wallpaper/image/upload/c_fill,f_auto,fl_progressive,q_auto,h_1200/v1638283230/articles/R10661_product.jpg",
    balance:"100",
    id:"5",
  },
];

export interface IPeople{
    id: number,
    name: string,
    designation: string,
    image:string,
}

export const people = [
  {
    id: 1,
    name: "Hussam Alsiliti",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Yousef Langi",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export const poolDetials = [
  {
    member:"Yousef Langi",
    date:"08/02/2024",
    src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    id:Math.random().toString(),
    from:"Best Buy",
    price:"200"
  },
  {
    member:"Hussam Alsiliti",
    date:"08/17/2024",
    src:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    id:Math.random().toString(),
    from:"Gucci",
    price:"400"
  },
  {
    member:"Jane Smith",
    date:"08/27/2024",
    src:"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    id:Math.random().toString(),
    from:"Target",
    price:"50"
  },
  {
    member:"Emily Davis",
    date:"09/09/2024",
    src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    id:Math.random().toString(),
    from:"Apple",
    price:"170"
  },
  {
    member:"Hussam Alsiliti",
    date:"09/15/2024",
    src:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    id:Math.random().toString(),
    from:"Dave's Hot Chicken",
    price:"80"
  },
  {
    member:"Tyler Durden",
    date:"09/15/2024",
    src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    id:Math.random().toString(),
    from:"Samsung",
    price:"20"
  },
  {
    member:"Hussam Alsiliti",
    date:"09/17/2024",
    src:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    id:Math.random().toString(),
    from:"Walamart",
    price:"100"
  },
  {
    member:"Dora",
    date:"09/17/2024",
    src:"https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    id:Math.random().toString(),
    from:"In-n-Out",
    price:"70"
  },
]
