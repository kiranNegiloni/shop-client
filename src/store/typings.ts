export type CartState = {
  [key: string | number]: {
    id: number;
    name: string;
    colour: string;
    price: number;
    img: string;
    total: number;
  };
};

export type Cart = {
  id: number;
  name: string;
  colour: string;
  price: number;
  img: string;
  total: number;
};
