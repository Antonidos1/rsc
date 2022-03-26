export interface Auto{
    id?: number
    mark_id: number,
    model_id: number,
    horsepower: number,
    year: number
}

export interface Mark{
    id?: number,
    name: string,
    country_id
}

export interface Country{
    id?: number,
    name: string
}

export interface Model{
    id?: number,
    name: string
    mark_id: number,

}