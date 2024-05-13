const dayNumber = 2;

switch (true) {
    case dayNumber === 6:
        console.log('Saturday');
        break;
    case dayNumber === 5:
        console.log('Friday');
        break;
    case dayNumber === 4:
        console.log('Thursday');
        break;
    case dayNumber === 3:
        console.log('Wednesday');
        break;
    case dayNumber === 2:
        console.log('Tuesday');
        break;
    case dayNumber === 1:
        console.log('Monday');
        break;
    case dayNumber === 0:
        console.log('Sunday');
        break;
    default :
        console.log('Invalid day number');
}