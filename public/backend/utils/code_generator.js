
const randomSerialCode = (number) => {
    const base = "0123456789";

    const generate = (length) => {
        var show = "";
        for (let i = 0; i < length; i++) {
            show += base.charAt(Math.floor(Math.random() * base.length))
        }
        return show;
    }
    return generate(number)
}


module.exports = {randomSerialCode};
