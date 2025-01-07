// Hash edition
int[] TwoSum(int[] nums, int target)
{
       List<int> result = new List<int>();
       Dictionary<int ,int> dic_nums= new Dictionary<int ,int>();
        dic_nums.Add(nums[0], 0);
        for (int i = 1; i < nums.Length; i++)
        {
            int value = target-nums[i];
            if (!dic_nums.ContainsKey(value)) { 
                if(!dic_nums.ContainsKey(nums[i]))
                    dic_nums.Add(nums[i], i);
            }
            else {
                result.Add(dic_nums[value]);
                result.Add(i);
                break;
            }
        }
        return result.ToArray();
}