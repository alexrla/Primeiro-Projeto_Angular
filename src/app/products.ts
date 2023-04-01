export interface IProduct {
  id: number;
  name: string;
  price: number;
  payment: string;
  image: string;
};

export const products = [
  { id: 1, name: "Mouse 1", price: 439.00, payment: "À vista no PIX", image: "/assets/mouse-3.jpg" },
  { id: 2, name: "Monitor", price: 1200.50, payment: "À vista no PIX", desconto: 2000.00, image: "/assets/monitor-1.jpg" },
  { id: 3, name: "Teclado 1", price: 749.99, payment: "À vista no PIX", image: "/assets/teclado-1.jpg" },
  { id: 4, name: "Fone de ouvido 1", price: 599.99, payment: "À vista no PIX", image: "/assets/fone-de-ouvido-2.jpg" },
  { id: 5, name: "Fone de ouvido 2", price: 299.99, payment: "À vista no PIX", image: "/assets/fone-de-ouvido-1.jpg" },
  { id: 6, name: "Fone de ouvido 3", price: 399.99, payment: "À vista no PIX", image: "/assets/fone-de-ouvido-3.jpg" },
  { id: 7, name: "HD 1TB", price: 499.99, payment: "À vista no PIX", image: "/assets/hd.jpg" },
  { id: 8, name: "Placas de vídeo", price: 18449.99, payment: "À vista no PIX", image: "/assets/placa-video.jpg" },
  { id: 9, name: "Processador Ryzen", price: 1000, payment: "À vista no PIX", image: "/assets/processador.jpg" },
  { id: 10, name: "Notebook 1", price: 2500, payment: "À vista no PIX", image: "/assets/laptop-1.jpg" },
  { id: 11, name: "Notebook 2", price: 4500, payment: "À vista no PIX", image: "/assets/laptop-2.jpg" },
  { id: 12, name: "Mouse 2", price: 20, payment: "À vista no PIX", image: "/assets/mouse-1.png" },
  { id: 13, name: "Mouse 3", price: 200, payment: "À vista no PIX", image: "/assets/mouse-2.jpg" },
  { id: 14, name: "Mouse 4", price: 50, payment: "À vista no PIX", image: "/assets/mouse-4.jpg" },
  { id: 15, name: "Teclado 2", price: 159.99, payment: "À vista no PIX", image: "/assets/teclado-2.jpg" },
];
