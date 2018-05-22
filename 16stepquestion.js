//write a function that accept a positive Number N and print the step with N with # characater
//Example step(2)
//            '# '
//            '##'
//Example step(3)
//            '#  '
//            '## '
//            '###'
//=========================Method 1============================================
/*----> ALGOrithm<-----
1.from 0 to N(iterat through rows)
2. create and empty stirng,called stair
3.from 0 to N(iteratr through columns)
4.IF the current column is equal to or less than than current row
5.Add # to stair
6.ELSE add space to stair
7.console.log the stair
*/
function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';
        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
    
}
steps(4);
/*
#
##
###
####
*/
//==========================Method 2 (the recursive way)==========================
