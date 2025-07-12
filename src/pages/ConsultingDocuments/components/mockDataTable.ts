// src/data/file-manager-data.ts

export interface Folder {
    id: number;
    name: string;
    fileCount: number;
}

export interface FileItem {
    id: number;
    name: string;
    modificationDate: string;
    size: string;
}

export const folders: Folder[] = [
    { id: 1, name: 'Energy Panels', fileCount: 2 },
    { id: 2, name: 'IEU', fileCount: 3 },
    { id: 3, name: 'FinC', fileCount: 8 },
    { id: 4, name: 'GSP', fileCount: 3 },
];

export const files: FileItem[] = [
    {
        id: 1,
        name: 'Creditreform 2024',
        modificationDate: 'Tuesday, 03.03.2025, 06:23',
        size: '2,34 MB',
    },
    {
        id: 2,
        name: 'Company presentation',
        modificationDate: 'Thursday, 05.05.2025, 14:33',
        size: '200,345 KB',
    },
    {
        id: 3,
        name: 'References',
        modificationDate: 'Monday, 06.06.2025, 17:02',
        size: '2,345 MB',
    },
];