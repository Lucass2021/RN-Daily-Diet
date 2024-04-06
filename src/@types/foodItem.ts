export type foodItem = {
    date: string,
    data: {
        time: string,
        foodName: string,
        foodDescription?: string,
        isHealthy: boolean
    }[]
}