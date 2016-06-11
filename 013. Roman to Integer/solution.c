int romanToInt(char* s) {
    int num = 0;
    int i = 0, j = 0;
    while (!!s[i]) {
        switch (s[i]) {
            case 'I': 
                if(!!s[++i]){
                    switch (s[i]) {
                        case 'V': j = 4; break;
                        case 'X': j = 9; break;
                        default: j = 1; i--; break;
                    }
                } else {
                    return num + 1;
                }
                break;
            case 'V': j = 5; break;
            case 'X': 
                if(!!s[++i]){
                    switch (s[i]) {
                        case 'L': j = 40; break;
                        case 'C': j = 90; break;
                        default: j = 10; i--; break;
                    }
                } else {
                    return num + 10;
                }
                break;
            case 'L': j = 50; break;
            case 'C': 
                if(!!s[++i]){
                    switch (s[i]) {
                        case 'D': j = 400; break;
                        case 'M': j = 900; break;
                        default: j = 100; i--; break;
                    }
                } else {
                    return num + 100;
                }
                break;
            case 'D': j = 500; break;
            case 'M': j = 1000; break;
            default: j = 0; break;
        }
        num += j;
//        printf(" + %d", j);
        i++;
    }

    return num;
}
