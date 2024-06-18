/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const row_set = new Set();
    const col_set = new Set();    
    for(let row =0; row<matrix.length;++row){
        for(let col =0; col<matrix[row].length;++col){
               if(matrix[row][col]===0){
                    if(!row_set.has(row))
                        row_set.add(row)
                    if(!col_set.has(col))
                        col_set.add(col)
               }
        }
    }
    for(let row =0; row<matrix.length;++row){
        for(let col =0; col<matrix[row].length;++col){
               if(matrix[row][col]!==0&&(row_set.has(row)||col_set.has(col))){
                    matrix[row][col]=0;
               }
        }
    }
   
};