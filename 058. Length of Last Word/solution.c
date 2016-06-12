int lengthOfLastWord(char* s) {
    int num=0, last=0;
    for(;*s;++s){
        if(*s==' ') {
           if(num!=0) last=num;
            num=0;
        }
        else num++;
    }
    if(num!=0)
    return num;
    else return last;
}

