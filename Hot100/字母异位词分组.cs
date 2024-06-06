 public IList<IList<string>> GroupAnagrams(string[] strs) {
        List<IList<string>> res = new List<IList<string>>();
        Dictionary<string,List<string>> dic_word= new Dictionary<string,List<string>>();
        foreach(string str in strs){
            char [] chars= str.ToCharArray();
            Array.Sort(chars);
            string sortword = new  string(chars);
            if(dic_word.ContainsKey(sortword)){

                dic_word[sortword].Add(str);
            }
            else{
                List<string> temp = new List<string>(){ str};
                dic_word.Add(sortword,temp);
            }
        }
        foreach( List<string> value in dic_word.Values){
            res.Add(value);
        }
        return res;
    }