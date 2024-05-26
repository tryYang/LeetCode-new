IList<int> SpiralOrder(List<List<int>> matrix)
{
    List<int> result = new List<int>() ;
    List<List<bool>> flag_matrix = new List<List<bool>>(); 
    foreach(var item in matrix)
    {
        var temp= item.Select(x=>false).ToList();
        flag_matrix.Add(temp);
    }
    int row = matrix.Count;
    int col = matrix[0].Count;
    //模拟 右 ,下 ，左，上
    List<List<int>> step = new List<List<int>>() {     
        new List<int>{ 0,1},
        new List<int>{ 1,0},
        new List<int>{ 0,-1},
        new List<int>{ -1,0},
    };
    //初始化
    int cur_row = 0; int cur_col = 0;
    result.Add(matrix[cur_row][cur_col]);
    flag_matrix[cur_row][cur_col] = true;
    int last_index = 0;
    while (true)
    {
        bool flag = true;       
        for(int i = 0; i < 4; i++)
        {
            var item_step = step[(i+ last_index) %step.Count];
            int newrow = cur_row + item_step[0];
            int newcol = cur_col + item_step[1];
            //边界条件
            if (newrow >= row || newrow < 0 || newcol >= col || newcol < 0)
            {
                continue;
            }
            if (!flag_matrix[newrow][newcol])
            {
                result.Add(matrix[newrow][newcol]);
                flag_matrix[newrow][newcol] = true;
                cur_row = newrow;
                cur_col = newcol;
                flag = false;
                last_index = (i + last_index) % step.Count;
                break;
            }
        }
       if (flag)
        {
            break;
        }
    }
    return result;
}