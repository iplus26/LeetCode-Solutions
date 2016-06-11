int lengthOfLongestSubstring(char *s) {
    int arr_last_position[255];
    memset(arr_last_position,-1,255*sizeof(int));

    int max_len = 0;
    int count = 0;
    int len = strlen(s);
    int i,last_position;

    int start_point = 0;
    for(i=0;i<len;++i){
        last_position = arr_last_position[s[i]];
        if(last_position != -1){//repeated char
            if(count>max_len)
                max_len = count;
            if(start_point<=last_position){
                count = i - last_position;
                start_point = last_position + 1;
            }else{
                count = i - start_point+1;
            }
        }else{//single appearance
            count += 1;
        }
        arr_last_position[s[i]] = i;
    }

    if(max_len<count)
        return count;
    else
        return max_len;
}
