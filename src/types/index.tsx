export interface User {
  name: string
  jobTitle: string
}

export interface Image {
    id: string,
    name: string,
    status: 'Alive' | 'Dead' | 'unknown',
    species: string,
    gender: string,
    image: string
    created: string
}

export interface Images {
    characters: {
        info: {
            count: number,
            pages: number,
            next: number | null,
            prev: number | null,
        },
        results: Image[]
    }
}

export interface imageCardProps {
    imageInfo: Image,
    onClick: () => void
}   

export interface ImageModalProps {
    isOpen: boolean
    onClose: () => void
    imageInfo: Image
}

export interface PaginationProps {
    currentPage: number
    totalPages: number
}

