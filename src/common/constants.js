export const url = "http://localhost:8001/api/";

const header = new Headers();
header.append({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'authorization': 'Bearer' + JSON.parse(localStorage.getItem("auth"))
}
);
export const header_data = header;