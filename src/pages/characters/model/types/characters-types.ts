export interface ICharacters {
    name: string,
    title: string,
    element: string,
    weapon: string,
    rarity: number,
    description: string,
    gender: string,
    image: string,
    splashArt: string,
    releaseDate: string,
    isPlayable: boolean,
    createdAt: string,
    updatedAt: string,
    _id: string,
}

export interface CharactersResponse {
    data: ICharacters[];
    total_characters: number;
}