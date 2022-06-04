

function showInfoPerson(name:string, date:string) :string {
    
    let day:string = ''
    let month:string = ''
    let year:string = ''
// console.log(date.length);
    for (let i = 0; i < date.length ; i++) {
        // console.log(i)  //date[i]
        if (i < 2) {
            day = day+date[i]
        }if (i > 2 && i < 5) {
            month = month+date[i]
        }if (i > 5) {
            if (date[i]===undefined){
                year = year+''
            }
            year = year+date[i]
        }
    }



    const str = 'Olá me chamo '+name+' nasci no dia  '+day+'  do mês de '+month+'  do ano de '+year
    return str 
}




const ber:string = showInfoPerson('bernardo', '20/08/2001')

console.log(ber);



