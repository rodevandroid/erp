export interface Cliente {
  id: number;
  pedido: string;
  cliente: string;
  vendedor: string;
  valor: number;
  link: string;
  process: boolean;
  pix: string;
  qrcode: string;
  txid: string;
};
