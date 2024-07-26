export interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }
  
  export interface ReviewModalProps {
    open: boolean;
    handleClose: () => void;
    id:number
  }


  export interface Product {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: Array<string>,
    brand: string,
};


export interface modalType  {
    isOpen:boolean,
    productId:number
}

  