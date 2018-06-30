export interface AbstractItme{
    id: number;
    city: string;
    landmark: string;
}

export interface AbstractItmes{
    country: string;
    items: AbstractItme[];
}