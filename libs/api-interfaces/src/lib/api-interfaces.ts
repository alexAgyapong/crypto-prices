export interface Message {
  message: string;
}

export interface Currency {
  name: string;
  value: number;
}
export interface Price {
  coin: string;
  currencies: Currency[];
}

