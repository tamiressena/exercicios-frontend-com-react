// Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

for (let i = 0; i < 7; i++) {
    if (i === 0) {
        console.log('#')
    } else if (i === 1) {
        console.log('##');
    } else if (i === 2) {
        console.log('###');
    } else if (i === 3) {
        console.log('####');
    } else if (i === 4) {
        console.log('#####');
    } else if (i === 5) {
        console.log('######');
    } else if (i === 6) {
        console.log('#######');
    }
}