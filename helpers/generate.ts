export const generateTokrn = (length : number) : string =>{
    const characters : string = 'ABCDEFGHIJKMNOPQRSTUVWXYZabcdefghijkmnopqrstuwxyz0123456789';
    let token : string = "";
    for (let i = 0; i < length; i += 1) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}
export const genarateNumber = (length : number) : string=> {
    const characters : string = '0123456789';
    let token : string = "";
    for (let i = 0; i < length; i += 1) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}