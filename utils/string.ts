export const toUpperCase = (str: string): string => {
    return str.toUpperCase()
}

export const toLowerCase = (str: string): string => {
    return str.toLowerCase()
}

export const trimString = (str: string, length: number): string => {
    return str.length > length ? str.slice(0, length) + '...' : str
}

// prettier-ignore
export const replaceString = (str: string, search: string, replace: string): string => {
    return str.split(search).join(replace)
}
