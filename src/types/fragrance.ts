export interface Fragrance {
    _id: string;
    name: string;
    brand: string;
    releaseYear: number;
    concentration: string;
    family: string;
    gender: string;
    short_description: string;
    description: string;
    topNotes: string[];
    heartNotes: string[];
    baseNotes: string[];
    seasons: string[];
    occasions: string[];
    rating: number;
    reviewCount: number;
    price: number;
    image: string;
}
