export function formatDate(date: string): string {
    let dateFormated = ''

    let year = ''
    let month = ''
    let day = ''

    for (let i = 0; i < date.length; i++) {
        if (i < 2) {
            day += date[i]
        }
        if (i > 2 && i < 5) {
            month += date[i]
        }
        if (i > 5) {
            year += date[i]
        }


    }

    dateFormated += year + "-" + month + "-" + day
    console.log("=============");
    console.log(date);
    console.log(dateFormated);
    console.log("=============");

    return dateFormated;
}