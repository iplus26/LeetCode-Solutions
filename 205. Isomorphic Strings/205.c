bool isIsomorphic(char* s, char* t) {
	int ms[255] = {0};
	int mt[255] = {0};
	char *ps = s;
	char *pt = t;
	while(0 != *ps){
		int i = *ps;
		int j = *pt;
		if(0 != ms[i]){
			if(ms[i] != j)
				return false;
		} else {
			if(0 != mt[j])
				return false;
			ms[i] = j;
			mt[j] = i;
		}

		++pt;
		++ps;
	}
	return true;
}