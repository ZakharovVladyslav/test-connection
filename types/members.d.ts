interface Engage {
    place: string;
}

interface Data {
    email: string;
    engage: Engage;
}

interface Member {
    data: Data;
    id: string;
    segments: [];
}
