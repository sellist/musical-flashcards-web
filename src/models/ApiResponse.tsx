export default interface ApiResponse<T> {
    status: string;
    response: number
    message: string;
    data: T;
}