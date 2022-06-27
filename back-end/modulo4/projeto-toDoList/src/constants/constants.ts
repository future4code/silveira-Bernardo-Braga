let userId: Array<number> = [];
let taskId: Array<number> = [];

export function getIdUser(): number {
    return userId.length;
}
export function getIdTask(): number {
    return taskId.length;
}
export function setIdUser(index: number): void {
    userId.push(index);

}
export function setIdTask(index: number): void {
    taskId.push(index);

}