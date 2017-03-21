export interface Course {
    id: number;
    title: string;
    description: string;
    duration: number;
    startDate: Date;
}

export const COURSES = [
    { id: 1,
        title: "First",
        description: "Lorem Ipsum",
        duration: 4432,
        startDate: new Date()},
    { id: 2,
        title: "Second",
        description: "Lorem Ipsum 2",
        duration: 345,
        startDate: new Date()}
]